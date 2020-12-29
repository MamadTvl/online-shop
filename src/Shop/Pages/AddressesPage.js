import React, {useEffect, useState} from "react";
import AddressForm from "../Components/Public/AddressForm";
import {useAddressPageStyle} from "./Styles/useAddressPageStyle";
import Title from "../Components/Public/Title";
import {Button, CircularProgress} from "@material-ui/core";
import useWindowSize from "../../utills/Hooks/useWindowSize";
import usePostAddress from "../PostData/usePostAddress";
import {useHistory} from 'react-router-dom'

function AddressPage() {
    document.title = 'اضافه کردن آدرس'
    const history = useHistory()
    const classes = useAddressPageStyle()
    const size = useWindowSize()
    const [values, setValues] = useState({
        name: '',
        mobileNumber: '',
        email: '',
        state: {
            name: '',
            id: null,
        },
        city: {
            name: '',
            id: null,
        },
        code: '',
        address: ''
    })

    const [fetchPost, setFetchPost] = useState(false)
    const [postLoading, postResult] = usePostAddress(fetchPost, values)
    const [errors, setErrors] = useState({
        name: false,
        mobileNumber: false,
        email: false,
        code: false,
        address: false
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        setFetchPost(true)

    }
    useEffect(() => {
        if (!postLoading && fetchPost) {
            if (postResult) {
                history.push('/profile')
            }
            setFetchPost(false)
        }
    }, [postLoading, postResult])

    return (
        <>
            <form className={classes.container} onSubmit={handleSubmit}>
                <Title title={'افزودن آدرس جدید'}/>
                <AddressForm
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                />
                <div style={{
                    width: size.width >= 600 ? '33.33%' : '100%',
                    float: 'left',
                    marginTop: 24,
                    position: 'relative'
                }}>
                    {postLoading && <CircularProgress size={38} className={classes.buttonProgress}/>}
                    <Button
                        disabled={postLoading}
                        type={'submit'}
                        fullWidth
                        className={classes.addButton}
                        variant={'contained'}
                    >
                        افزودن
                    </Button>
                </div>
            </form>

        </>
    )
}

export default AddressPage