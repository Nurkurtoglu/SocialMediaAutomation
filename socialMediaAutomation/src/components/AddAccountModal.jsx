import React, { useState, useRef, use } from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField, { textFieldClasses } from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { btn_style, style, style_modal_text, style_error_handler } from '../style/styles';
import { saveFormSchema } from '../schemas/SaveFormSchemas';
import { useFormik } from 'formik';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from "react-redux";
import { addMediaData } from "../slices/AddAccountModalSlice";
//import { useEffect } from 'react';

function AddAccountModal({ addRow }) {
    const dispatch = useDispatch();

    const handleAddMedia = () => {
        dispatch(addMediaData({ link: values.mediaLink, name: values.mediaName, description: values.description }));
    };


    const submit = (values, action) => {
        setTimeout(() => {
            action.resetForm();
        }, 2000);
    }

    const { values, errors, handleChange, handleSubmit, resetForm } = useFormik({
        initialValues: {
            mediaLink: '',
            mediaName: '',
            description: ''
        },
        validationSchema: saveFormSchema,
        onSubmit: submit
    });


    const [open, setOpen] = useState(false);

    const buttonRef = useRef(null);

    const handleClose = () => {
        setOpen(false);
        resetForm();
        setTimeout(() => {
            if (buttonRef.current) {
                buttonRef.current.focus();
            }
        }, 300);
    };

    const handleOpen = () => setOpen(true);


    const [snackbar, setSnackbar] = useState({ open: false, severity: 'success', message: '' });

    const addDataGrid = () => {
        if (values.mediaLink && values.mediaName && !errors.mediaLink && !errors.mediaName && !errors.description) {
            addRow(values.mediaLink, values.mediaName, values.description);
            handleAddMedia();
            setSnackbar({ open: true, severity: 'success', message: 'Yeni hesap başarıyla eklendi!' });
            handleClose();

        } else {
            setSnackbar({ open: true, severity: 'error', message: 'Lütfen formu doğru şekilde doldurun!' });
        };
    };



    return (
        <div>
            <Box >
                <Button
                    ref={buttonRef}
                    sx={btn_style}
                    onSubmit={handleAddMedia}
                    onClick={handleOpen}
                    variant="contained"
                    startIcon={<PlaylistAddIcon />}
                >
                    Yeni Hesap Ekle
                </Button>
                <Backdrop
                    sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                    open={open}
                    onClick={handleClose}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </Box>


            <form onSubmit={handleSubmit}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        padding: 2,
                        marginBottom: 0
                    }}
                >
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: { timeout: 500 },
                        }}
                    >
                        <Fade in={open}>
                            <Box sx={style} noValidate >
                                <CloseIcon
                                    onClick={handleClose}
                                    sx={{ alignSelf: 'flex-end', cursor: 'pointer' }}
                                    type="button"
                                />
                                <TextField
                                    required
                                    size="small"
                                    label="Sosyal Medya Link"
                                    color="secondary"
                                    name="mediaLink"
                                    sx={style_modal_text}
                                    value={values.mediaLink} onChange={handleChange}
                                />{errors.mediaLink && <p style={style_error_handler} className="error">{errors.mediaLink}</p>}
                                <TextField
                                    required
                                    size="small"
                                    label="Sosyal Medya Adı"
                                    color="secondary"
                                    name="mediaName"
                                    sx={style_modal_text}
                                    value={values.mediaName} onChange={handleChange}
                                />{errors.mediaName && <p style={style_error_handler} className="error">{errors.mediaName}</p>}
                                <TextField
                                    size="small"
                                    label="Açıklama"
                                    color="secondary"
                                    name="description"
                                    sx={style_modal_text}
                                    value={values.description}
                                    onChange={handleChange}
                                />{errors.description && <p style={style_error_handler} className="error">{errors.description}</p>}
                                <Stack spacing={2} direction="row">
                                    <Button
                                        onClick={handleClose}
                                        sx={{ borderRadius: "100px", textTransform: "none" }}
                                        variant="outlined"
                                        color="secondary"
                                        type="button"
                                    >
                                        Vazgeç
                                    </Button>
                                    <Button onClick={addDataGrid} type="submit" sx={btn_style} variant="contained">Kaydet</Button>

                                </Stack>
                            </Box>
                        </Fade>
                    </Modal>
                </Box>
            </form>
            <Snackbar open={snackbar.open} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={() => setSnackbar({ ...snackbar, open: false })}>
                <Alert
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                    severity={snackbar.severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </div >
    );
}

export default AddAccountModal;
