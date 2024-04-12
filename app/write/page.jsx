"use client";

import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { app } from "@/utils/firebase";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const storage = getStorage(app);

const page = () => {
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    const upload = () => {
      // FIREBASE STORAGE
      const name = new Date().getTime + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className="">LOADING.......</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  // TO TRANSFORM TITLE INTO SLUG
  // Example: SANDESH MADOORI => sandesh-madoori

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style",
      }),
    });

    console.log(res);
  };

  return (
    <>
      <div className="relative flex flex-col">
        <div className="flex justify-between items-center ">
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            onChange={(e) => setTitle(e.target.value)}
          />
          <InputLabel id="select-category" style={{ display: "none" }}>
            Category
          </InputLabel>
          <Select
            value={catSlug}
            labelId="select-category"
            label="Category"
            className="mt-[10px]"
            style={{ height: 32, width: 200 }}
            onChange={(e) => setCatSlug(e.target.value)}
          >
            <MenuItem value="fashion">Fashion</MenuItem>
            <MenuItem value="style">Style</MenuItem>
            <MenuItem value="coding">Coding</MenuItem>
            <MenuItem value="food">Food</MenuItem>
            <MenuItem value="travel">Travel</MenuItem>
            <MenuItem value="culture">Culture</MenuItem>
          </Select>
        </div>
        <div className="editor flex  h-96 relative pt-4">
          <ReactQuill
            className="w-full "
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Write your Blog"
          />
          <div className="flex flex-col-reverse absolute right-[10px] bottom-[10px] gap-1">
            <Fab
              className=""
              sx={{
                color: "black",
                boxShadow: "none",
                border: 1,
              }}
              size="small"
              aria-label="add"
              onClick={() => setOpen(!open)}
            >
              <AddIcon />
            </Fab>
            {open && (
              <div>
                <input
                  type="file"
                  id="image"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
                <Fab
                  className="flex gap-5 bg-[var(--bgColor)] absolute"
                  sx={{
                    color: "black",
                    boxShadow: "none",
                    border: 1,
                  }}
                  size="small"
                >
                  <label htmlFor="image">
                    <AddPhotoAlternateOutlinedIcon />
                  </label>
                </Fab>
              </div>
            )}
          </div>
        </div>
        <button
          className="button mt-5 p-2 bg-black text-white font-bold border-none rounded-md cursor-pointer"
          onClick={handleSubmit}
        >
          PUBLISH
        </button>
      </div>
    </>
  );
};

export default page;
