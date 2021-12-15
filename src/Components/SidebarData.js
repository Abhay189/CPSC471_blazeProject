import React from 'react'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PowerInputIcon from '@mui/icons-material/PowerInput';
import ModeIcon from '@mui/icons-material/Mode';
import ListIcon from '@mui/icons-material/List';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SummarizeIcon from '@mui/icons-material/Summarize';


export const SidebarData = [

    {
        title:"Products",
        icon: <ProductionQuantityLimitsIcon/>,
        link:"/Products"
    },

    {
        title:"Receiving",
        icon: <PowerInputIcon/>,
        link:"/Receiving"
    },

    {
        title:"Supplier",
        icon: <ModeIcon/>,
        link:"/ViewSupplier"
    },

    {
        title:"add",
        icon: <ListIcon/>,
        link:'./AddSupplier'
    },
    {
        title:"Registered Users",
        icon: <PeopleIcon/>,
        link:"/RUsers"
    },
    {
        title:"Discount",
        icon: <LocalOfferIcon/>,
        link:"/Discount"
    },

    {
        title:"Sales Report",
        icon: <SummarizeIcon/>,
        link:"/Report"
    },
]