import React, { useEffect, useState } from 'react'

export default function CarSelection() {
    const [selectedCar, setSelectedCar] = useState('bmv')
    const [selectedColor, setSelectedColor] = useState('blue')
    const [value, setValue] = useState()
    useEffect(() => {
        switch (value) {
            case '0':
                setSelectedCar('bmv')
                break
            case '1':
                setSelectedCar('honda')
                break
            case '2':
                setSelectedCar('mes')
                break
            default:

        }
    }, [value])
    useEffect(() => {
        switch (value) {
            case '3':
                setSelectedColor('blue')
                break
            case '4':
                setSelectedColor('red')
                break
            case '5':
                setSelectedColor('green')
                break
            default:

        }
    }, [value])

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <div>
            Select a car:
            <select name="" id="" onChange={handleChange}>
                <option value="0" >bmv</option>
                <option value="1" >honda</option>
                <option value="2" >mes</option>
            </select><br /><br />
            Select a color:
            <select name="" id="" onChange={handleChange}>
                <option value="3">blue</option>
                <option value="4">red</option>
                <option value="5">green</option>
            </select>

            <p>your selected a {selectedColor} {selectedCar} </p>

        </div>
    )
}
