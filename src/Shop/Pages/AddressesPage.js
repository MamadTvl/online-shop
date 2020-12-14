import React, {useState} from "react";
import AddressForm from "../Components/Public/AddressForm";
import ShopLayout from "../Layouts/ShopLayout";
import {useAddressPageStyle} from "./Styles/useAddressPageStyle";
import Title from "../Components/Public/Title";
import {Button} from "@material-ui/core";
import useWindowSize from "../../utills/Hooks/useWindowSize";


function AddressPage() {
    const classes = useAddressPageStyle()
    const size = useWindowSize()
    const [values, setValues] = useState({
        name: '',
        mobileNumber: '',
        email: '',
        state: '',
        city: '',
        code: '',
        address: ''
    })

    const [errors, setErrors] = useState({
        name: false,
        mobileNumber: false,
        email: false,
        code: false,
        address: false
    })
    return (
        <ShopLayout>
            <form className={classes.container}>
                <Title title={'افزودن آدرس جدید'} />
                <AddressForm
                    values={values}
                    setValues={setValues}
                    errors={errors}
                    setErrors={setErrors}
                />
                <div style={{width: size.width >= 600 ? '33.33%' : '100%', float: 'left', marginTop: 24}}>
                    <Button
                        // disabled={loading}
                        type={'submit'}
                        fullWidth
                        className={classes.addButton}
                        variant={'contained'}
                    >
                        افزودن
                    </Button>
                </div>
            </form>

        </ShopLayout>
    )
}

export default AddressPage