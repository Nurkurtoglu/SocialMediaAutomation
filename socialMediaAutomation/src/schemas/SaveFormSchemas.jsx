import * as yup from 'yup';

export const saveFormSchema = yup.object().shape({
    mediaLink: yup.string().url('Geçerli bir URL girin. Örnek: https://www.instagram.com').required('Bu alan zorunludur'),
    mediaName: yup.string().min(2, 'En az 2 karakter olmalı').max(50, 'En fazla 50 karakter olmalı').required('Bu alan zorunludur'),
    description: yup.string().max(200, 'En fazla 200 karakter olmalı'),
})