import React from 'react'
import '../style/socialMediaTable.css'
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import AddAccountModal from './AddAccountModal';
import DeleteIcon from '@mui/icons-material/Delete';

function SocialMediaTable() {


    const initialRows = [
        { id: 1, name: 'https://www.instagram.com/mobilerast/', mediaName: 'fjlskdf', description: 'wqeqeq' },
        { id: 2, name: 'tr.linkedin.com/company/rastmobile', mediaName: 'fjlskdf', description: 'qweqwew' },
        { id: 3, name: 'twitter.com/rastmobile', mediaName: 'fjlskdf', description: 'wqeqweqwe' },
        { id: 4, name: 'https://www.instagram.com/mobilerast/', mediaName: 'fjlskdf', description: 'wqeqeq' },
    ];

    const columns = [
        { field: 'name', headerName: 'Sosyal Medya Linki', width: 350, editable: true },
        { field: 'mediaName', headerName: 'Sosyal Medya Adı', width: 300, editable: true },
        { field: 'description', headerName: 'Açıklama', width: 300, editable: true },
        {
            field: 'actions',
            headerName: 'İşlemler',
            width: 100,
            sortable: false,
            renderCell: (params) => (
                <DeleteIcon
                    style={{ cursor: 'pointer', color: 'red', marginLeft: 25, marginTop: 15 }}
                    onClick={() => handleDelete(params.id)}
                />
            ),
        },
    ];

    const [rows, setRows] = useState(initialRows);
    const [searchText, setSearchText] = useState("")


    const processRowUpdate = (newRow) => {
        setRows(rows.map((row) => (row.id === newRow.id ? newRow : row)));
        return newRow;
    }
    const addDataGrid = (socialMediaLink, socialMediaName, description) => {
        const newId = rows.length > 0 ? Math.max(...rows.map((row) => row.id)) + 1 : 1;
        const newRow = { id: newId, name: socialMediaLink, mediaName: socialMediaName, description: description };
        setRows([...rows, newRow]);
    };

    const handleDelete = (id) => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    };

    return (
        <div>

            <div className="div-container">
                <Box sx={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: 2, marginTop: 10, marginBottom: 0 }}>
                    <Box sx={{ flexGrow: 1 }}>
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
                    <AddAccountModal addRow={addDataGrid} />
                </Box>
                <DataGrid sx={{ height: '500px' }} rows={rows.filter(row =>
                    row.name.toLowerCase().includes(searchText.toLowerCase()) ||
                    row.mediaName.toLowerCase().includes(searchText.toLowerCase()) ||
                    row.description.toLowerCase().includes(searchText.toLowerCase())
                )} columns={columns} processRowUpdate={processRowUpdate}
                    experimentalFeatures={{ newEditingApi: true }} />
            </div>
        </div>
    )
}

export default SocialMediaTable