import { Form } from "@radix-ui/react-form";
import {useEffect, useState} from "react";

export type FieldErrors = {
    [key: string]: string[]
}

export type ServerErrorsType = {
    detail?: string[]
    non_field_errors?: string[]
} | FieldErrors

export const useServerErrors = (
    errors: ServerErrorsType,
    form: any
) => {
    const [detailErrors, setDetailErrors] = useState<string[] | string>();
    const [nonFieldErrors, setNonFieldErrors] = useState<string[] | string>();
    const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

    useEffect(() => {
        if (errors.hasOwnProperty("detail")) {
            setDetailErrors(errors.detail);
            setFieldErrors({});
            setNonFieldErrors(undefined);
        } else if (errors.hasOwnProperty("non_field_errors")) {
            setNonFieldErrors(errors.non_field_errors);
            setDetailErrors(undefined);
            setFieldErrors({});
        } else if (typeof errors === "object") {
            setFieldErrors(errors)
            setDetailErrors(undefined);
            setNonFieldErrors(undefined);
        } else {
            setFieldErrors({});
            setDetailErrors(undefined);
            setNonFieldErrors(undefined);
        }
    }, [errors]);

    useEffect(() => {
        if (fieldErrors) {
            Object.keys(fieldErrors).forEach((key) => {
                if (fieldErrors?.hasOwnProperty(key)) {
                    const isString = typeof fieldErrors[key][0] === "string";
                    if (isString) {
                        let message = fieldErrors[key][0] || '';
                        form.setError(key, { message });
                    }
                }
            });
        }
    }, [fieldErrors, form]);

    useEffect(() => {
        if (Object.keys(errors).length === 0) {
            form.clearErrors();
        }
    }, [errors]);

    return {fieldErrors, detailErrors, nonFieldErrors}
}

interface ErrorMessageListProps {
    errors: string[] | string | undefined;
}
  
const ErrorMessageList: React.FC<ErrorMessageListProps> = ({ errors }) => {
    if (!errors) {
        return null;
    }

    const errorList = Array.isArray(errors) ? errors : [errors];
  
    return (
        <>
            {errorList.map((error, index) => (
                <p className="text-red-500" key={index}>* {error}</p>
            ))}
        </>
    );
};
  
  export default ErrorMessageList;
  