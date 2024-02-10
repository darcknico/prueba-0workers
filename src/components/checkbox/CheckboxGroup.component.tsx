import React, { useEffect, useState } from 'react'
import Checkbox, { CheckboxValue } from './Checkbox.component';

export interface CheckboxGroupValue {
    label: string;
    value: string|number;
}

interface CheckboxGroupProps {
    onChange: (e: CheckboxGroupValue[]) => void;
    list: CheckboxGroupValue[];
}

export default function CheckboxGroup({list,onChange}: CheckboxGroupProps) {
    const [selected, setSelected] = useState<CheckboxGroupValue[]>([])
    const isSelectedAll = selected.length === list.length

    const onClickSelectAll = () => {
        if(isSelectedAll){
            setSelected([])
        } else {
            setSelected(list)
        }
    }

    const onClickCheckbox = ({value,checked}:CheckboxValue) => {
        if(checked){
            const item = list.find(({value:originValue})=>originValue===value)
            if(item)setSelected([item,...selected])
        } else {
            setSelected(selected.filter(({value:originValue})=>originValue!==value))
        }
    }

    useEffect(() => {
        onChange(selected)
    }, [selected])
    
    return (
        <div>
            <Checkbox 
                id='id-sellectAll'
                label='Select All'
                value={'sellectAll'}
                onChange={onClickSelectAll}
                checked={isSelectedAll}
            />
            {
                list.map(({label,value}:CheckboxGroupValue)=>{
                    const unique = `id-${value}`
                    const isChecked = selected.some(({value:selectedValue}:CheckboxGroupValue)=>selectedValue===value)
                    return (
                        <Checkbox 
                            id={unique} 
                            label={label} 
                            value={value} 
                            onChange={onClickCheckbox} 
                            checked={isChecked} 
                            key={unique}
                        />
                    )
                })
            }
        </div>
    )
}