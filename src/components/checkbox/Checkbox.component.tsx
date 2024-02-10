import React from 'react'

export interface CheckboxValue {
    value: string|number;
    checked: boolean;
}

interface CheckboxProps {
    id: string;
    value: string|number;
    label: string;
    checked: boolean;
    onChange: (e: CheckboxValue) => void;
}
  

export default function Checkbox({id,value,label, onChange, checked}: CheckboxProps) {
    const onClickCheckbox = () => {
        onChange({
            value,
            checked: !checked,
        })
    }
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value={value} id={id} onChange={onClickCheckbox} checked={checked}/>
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
        </div>
    )
}