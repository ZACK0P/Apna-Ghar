"use client";
import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


function EditListing() {
    return (
        <div className='px-10 md:px-36 my-10'>
            <h2 className='font-bold text-2xl'>Enter some more details about your listing</h2>
            <div className='p-8 rounded-lg shadow-md'>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-lg text-slate-500'>Rent or Sell?</h2>
                        <RadioGroup defaultValue="Sell">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Rent" id="Rent" />
                                <Label htmlFor="Rent">Rent</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Sell" id="Sell" />
                                <Label htmlFor="Sell">Sell</Label>
                            </div>
                        </RadioGroup>

                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-lg text-slate-500'>Property Type</h2>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select Property Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Single Family House">Single Family House</SelectItem>
                                <SelectItem value="Town House">Town House</SelectItem>
                                <SelectItem value="Condo">Condo</SelectItem>
                            </SelectContent>
                        </Select>

                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-'>
                    <div className='flex gap-2 flex-col'>
                        <h2 className='text-gray-500'>Bedroom</h2>
                        <Input type="number" placeholder="Ex.2" name="bedroom" />
                    </div>
                    <div className='flex gap-2 flex-col'>
                        <h2 className='text-gray-500'>Bathroom</h2>
                        <Input placeholder="Ex.2" name="bathroom" />
                    </div>
                    <div className='flex gap-2 flex-col'>
                        <h2 className='text-gray-500'>Built In</h2>
                        <Input placeholder="Ex.2" name="builtIn" />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-'>
                        <h2 className='text-gray-500'>Parking</h2>
                        <Input placeholder="Ex.2" name="parking" />
                    </div>
                    <div className='flex gap-2 flex-col'>
                        <h2 className='text-gray-500'>Lot Size (Sq.Ft)</h2>
                        <Input placeholder="Ex.2" name="lotSize" />
                    </div>
                    <div className='flex gap-2 flex-col'>
                        <h2 className='text-gray-500'>Area (Sq.Ft)</h2>
                        <Input placeholder="Ex.1900" name="area" />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-'>
                        <h2 className='text-gray-500'>Selling Price ($)</h2>
                        <Input placeholder="40000" name="sellingPrice" />
                    </div>
                    <div className='flex gap-2 flex-col'>
                        <h2 className='text-gray-500'>HOA (Per Month)</h2>
                        <Input placeholder="1000" name="hoa" />
                    </div>

                </div>
                <div className='grid grid-cols-1 gap-10'>
                    <div className='flex gap-2 flex-col'>
                        <h2 className='text-gray-500'>Description</h2>
                        <Textarea placeholder="" name="description" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditListing