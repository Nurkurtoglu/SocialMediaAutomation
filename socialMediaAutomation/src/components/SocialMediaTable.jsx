import React, { use } from 'react'
import '../style/socialMediaTable.css'
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import AddAccountModal from './AddAccountModal';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { getMediaData, deleteMediaData, updateMediaData } from "../slices/SocialMediaTableSlice";
import { useEffect } from 'react';
import Grid from '@mui/material/Grid';

function SocialMediaTable() {

    const dispatch = useDispatch();

    const { mediaInfo } = useSelector((store) => store.media);

    useEffect(() => {
        dispatch(getMediaData());
    }, [dispatch]);

    useEffect(() => {
        if (mediaInfo && mediaInfo.length > 0) {
            setRows(mediaInfo.map(info => ({
                id: info.id,
                link: info.link,
                name: info.name,
                description: info.description
            })));
        }
    }, [mediaInfo]);

    const handleDeleteMedia = (id) => {
        dispatch(deleteMediaData(id));
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    }

    const handleUpdateMedia = (id, updatedInfo) => {
        dispatch(updateMediaData({ id, mediaInfo: updatedInfo }));
    }

    const initialRows = mediaInfo.map((info) => ({
        id: info.id,
        link: info.link,
        name: info.name,
        description: info.description
    }));
    console.log(initialRows);

    const columns = [
        {
            field: 'link', headerName: 'Sosyal Medya Linki', width: 350, editable: true,
            renderCell: (params) => {
                return (
                    <a
                        href={params.value}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{ color: 'purple', textDecoration: 'underline' }}
                    >
                        {params.value}
                    </a>
                );
            },
        },
        { field: 'name', headerName: 'Sosyal Medya Adı', width: 300, editable: true },
        { field: 'description', headerName: 'Açıklama', width: 300, editable: true },
        {
            field: 'actions',
            headerName: 'İşlemler',
            width: 100,
            sortable: false,
            renderCell: (params) => (
                <DeleteIcon
                    style={{ cursor: 'pointer', color: 'red', marginLeft: 25, marginTop: 15 }}
                    onClick={() => handleDeleteMedia(params.id)}
                />
            ),
        },
    ];

    const [rows, setRows] = useState(initialRows);
    const [searchText, setSearchText] = useState("")


    const processRowUpdate = (newRow) => {
        if (!newRow.link || !newRow.name) {
            alert("Sosyal medya linki ve adı boş bırakılamaz.");
            return rows.find((row) => row.id === newRow.id);
        } else if (!/^https?:\/\/.+/.test(newRow.link)) {
            alert("Geçerli bir URL giriniz. (http:// veya https:// ile başlamalıdır)");
            return rows.find((row) => row.id === newRow.id);
        } else {
            setRows(rows.map((row) => (row.id === newRow.id ? newRow : row)));
            handleUpdateMedia(newRow.id, { link: newRow.link, name: newRow.name, description: newRow.description });
            return newRow;
        }

    }
    const addDataGrid = (socialMediaLink, socialMediaName, description) => {
        const newId = rows.length > 0 ? Math.max(...rows.map((row) => row.id)) + 1 : 1;
        const newRow = { id: newId, link: socialMediaLink, name: socialMediaName, description: description };
        setRows([...rows, newRow]);
    };



    return (
        <div>

            <div className="div-container">
                <Box sx={{ padding: 2, marginTop: 10, marginBottom: 0 }}>
                    <Grid container alignItems="center" justifyContent="space-between" spacing={2} >
                        <Grid size={{ xs: 12, md: 10 }} >
                            <Box >
                                <TextField sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: "100px"
                                    }, width: "300px"
                                }} id="input-with-sx" label="Hesap Ara..." variant="outlined" value={searchText} onChange={(e) => setSearchText(e.target.value)} color="secondary" size="small" InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <SearchIcon sx={{ color: "inherit" }} />
                                        </InputAdornment>
                                    ),
                                }} />
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 2 }}>
                            <AddAccountModal addRow={addDataGrid} />
                        </Grid>
                    </Grid>
                </Box>

                <DataGrid sx={{ height: '500px' }} rows={rows.filter(row =>
                    row.link.toLowerCase().includes(searchText.toLowerCase()) ||
                    row.name.toLowerCase().includes(searchText.toLowerCase()) ||
                    row.description.toLowerCase().includes(searchText.toLowerCase())
                )} columns={columns} processRowUpdate={processRowUpdate}
                    experimentalFeatures={{ newEditingApi: true }} />
            </div>
        </div>
    )
}

export default SocialMediaTable