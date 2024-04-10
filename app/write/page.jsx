"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const page = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className="">LOADING.......</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <>
      <div className="relative flex flex-col">
        <TextField
          fullWidth
          id="standard-basic"
          label="Title"
          variant="standard"
        />
        <div className="editor flex gap-5 h-96 relative pt-4">
          <ReactQuill
            className="w-full "
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Write your Blog"
          />
          <div className="flex flex-col-reverse gap-2">
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
              <Fab
                className="flex gap-5 bg-[var(--bgColor)] absolute"
                sx={{
                  color: "black",
                  boxShadow: "none",
                  border: 1,
                }}
                size="small"
              >
                <AddPhotoAlternateOutlinedIcon />
              </Fab>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
