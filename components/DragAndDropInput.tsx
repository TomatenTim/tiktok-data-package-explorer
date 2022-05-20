import { Typography, useTheme } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import { useDropzone } from "react-dropzone";


export default function DragAndDropInput() {

  const theme = useTheme();
  const { t } = useTranslation('index');
  
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      'application/json': [],
      'application/zip': [],
    },
    maxFiles: 1,
    onDrop(acceptedFiles, fileRejections, event) {
      console.log(acceptedFiles);
      console.log(fileRejections);
      console.log(event);
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
      </div>
      
    </>
  )
}

