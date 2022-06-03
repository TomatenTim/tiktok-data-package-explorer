import { Typography, useTheme } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import readUserDataFromZip from "../libs/readUserDataFromZip";


export default function DragAndDropInput() {

  const [data, setData] = useState<Object>({});

  const theme = useTheme();
  const { t } = useTranslation('index');
  
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      'application/json': [],
      'application/zip': [],
    },
    maxFiles: 1,
    onDrop(acceptedFiles, fileRejections, event) {
      acceptedFiles.forEach(async (file, index) => {
        console.log(file);
        console.log(index);

        const userData = await readUserDataFromZip(file);
        console.log(userData);

        setData({
          likes: userData?.favorites?.videos?.length,
          videos: userData?.history?.videos?.length,
        })
      })
    }
  })

  return (
    <>
      <div
        {...getRootProps({ className: 'dropzone' })}
      >
        <input {...getInputProps()} />
        <Typography variant="body1" color="textPrimary">
          {t('uploadButtonText')}
        </Typography>
        {JSON.stringify(data)}
      </div>
      
    </>
  )
}

