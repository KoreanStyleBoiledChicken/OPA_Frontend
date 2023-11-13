import React, { useState } from 'react';
import { Button, Paper, Typography, Input, InputLabel, Box } from '@mui/material';
import colorConfigs from '../../config/colorConfigs';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CachedIcon from '@mui/icons-material/Cached';
import PullRequestDetailListBox from '../pullRequestDetail/component/PullRequestDetailListBox';

export const FileDragDrop: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [loadingFile, setLoadingFile] = useState(false);

    function setLoading() {
        const waitTime = 1500;
        setLoadingFile(true);
        setTimeout(() => {
            setLoadingFile(false);
        }, waitTime);
    }

    const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setLoading();
        const droppedFile = e.dataTransfer.files[0];
        setSelectedFile(droppedFile);
    };

    const handleFileSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setLoading();
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    return (
        <Box sx={{
            borderRadius: "24px"
        }}>
            <Paper
                sx={{
                    borderRadius: "24px",
                    height: "200px",
                    width: "100%",
                    backgroundColor: colorConfigs.main.sub,
                    border: "none",
                    display: "table"
                }}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleFileDrop(e)}
                style={{ padding: '20px', textAlign: 'center' }}>
                {
                    loadingFile ?
                        <Box sx={{ verticalAlign: "middle", display: "table-cell" }}>
                            <CachedIcon sx={{ fontSize: "48px", color: colorConfigs.green.shade4 }} />
                        </Box>

                        : selectedFile ? (
                            <Box sx={{ verticalAlign: "middle", display: "table-cell", color: colorConfigs.green.shade4, fontWeight: "bold" }}>
                                <Typography variant="h6" >Selected File:</Typography>
                                <Typography variant="h5">{selectedFile.name}</Typography>
                            </Box>
                        ) : (
                            <Box sx={{ verticalAlign: "middle", display: "table-cell" }}>
                                <Typography variant="h6" sx={{ color: colorConfigs.green.shade4 }}>Drag and drop a file here</Typography>
                                <InputLabel>
                                    <Input
                                        type="file"
                                        onChange={handleFileSelection}
                                        style={{ display: 'none' }}
                                        id="file-upload"
                                    />
                                    <Button
                                        component="label"
                                        htmlFor="file-upload">
                                        <DriveFolderUploadIcon sx={{ fontSize: "48px", color: colorConfigs.green.shade4 }} />
                                    </Button>
                                </InputLabel>
                            </Box>
                        )}
            </Paper>
            {(loadingFile === false && selectedFile) ? 
                <PullRequestDetailListBox/>
                : null
            }
        </Box>
    );
};

export default FileDragDrop;
