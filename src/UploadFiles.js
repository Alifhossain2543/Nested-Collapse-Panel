import { Upload, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import Resizer from "react-image-file-resizer";
import axios from 'axios';


const resizeFile = (file) =>
    new Promise((resolve) => {
        Resizer.imageFileResizer(file, 600, 600, "JPEG", 200, 0, (uri) => { resolve(uri); },
            "base64"
        );
    });

const UploadFiles = () => {
    const [fileList, setFileList] = useState({})
    const [sendReq, setSendReq] = useState(false)
    const [defaultListOfFiles, setdefaultListOfFiles] = useState([])

    const handleOnChange = ({ file, fileList, evenet }) => {
        // console.log(file, fileList, evenet)
    }

    const uploadFiles = async (options) => {
        const { file } = options

        const selectedFile = window.URL.createObjectURL(file)

        if (file.type && !file.type.includes("image")) {
            new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file)
                reader.onload = () => {
                    resolve(reader.result)
                    const pdfData = reader.result && reader.result.split("base64,")[1]
                    setFileList(
                        {
                            name: file.name,
                            uid: file.uid,
                            type: file.type,
                            data: pdfData
                        }
                    )

                    // const base64Data = new Buffer.from(reader.result.replace(/^data:image\/\w+;base64,/, ""), "base64")
                };
                reader.onerror = error => {
                    reject(error)
                    console.log(error)
                };
            });

        } else if (file.type && file.type.includes("image")) {
            const image = await resizeFile(file)
            const imageData = image && image.split("base64,")[1]

            setFileList({
                name: file.name,
                uid: file.uid,
                type: file.type,
                data: imageData
            }
            )

        }
        setSendReq((pre) => ({ sendReq: !pre }))
        setdefaultListOfFiles(pre => ([selectedFile, ...pre]))

    }

    // console.log(defaultListOfFiles)

    useEffect(() => {
        if (sendReq && Object.keys(fileList).length !== 0) {
            // console.log(fileList)
            const submitToBackend = async () => {
                try {
                    const { data } = await axios.post("http://localhost:5000/api/upload-files", fileList)
                    console.log(data)
                } catch (err) {
                    console.log(err)
                }
            }

            submitToBackend()
        }

    }, [sendReq && Object.keys(fileList).length !== 0, fileList])



    return (
        <>

            <Upload accept="image/*,.pdf" multiple={true} customRequest={uploadFiles}
                onChange={handleOnChange}
                listType="picture-card"
                showUploadList={false}
            >
                <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>

            {defaultListOfFiles.length !== 0 &&
                <ul>
                    {defaultListOfFiles.map((sf, inx) => {
                        return (
                            <li key={inx} >
                                <img src={sf} alt={`img${inx}`} />

                            </li>

                        )
                    })}
                </ul>}

        </>
    )
}

export default UploadFiles
