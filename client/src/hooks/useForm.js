import { useLocalStorage } from './useLocalStorage';

export function useForm(key, initialValues, cb) {
    const [values, setValues] = useLocalStorage(key, initialValues);

    const handleChanges = e => {
        setValues({...values, [e.target.name]: e.target.value});
    };

    return [values, handleChanges];
}