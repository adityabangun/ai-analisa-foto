'use client'

import { FileWithPreview } from "@/types/file";

interface FileUploadProps {
    value?: FileWithPreview[];
    onchange?: (files: FileWithPreview[]) => void;
    onRemove?: (files: FileWithPreview) => void;
    maxFiles?: number;
    maxSize?: number; //in mb
    accept?: { [key:string] : string[]};
    disabled?: boolean;
    className?: string;
}

const FileUpload = ({
    value= [],
    onchange,
    onRemove,
    maxFiles = 1,
    maxSize = 20,
    accept = {
        "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
        "application/pdf":[".pdf"],
    },
    disabled = false,
    className,
}: FileUploadProps) => {
    return ( 
        <div>File Upload Page</div>
     );
}
 
export default FileUpload;