import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
const sideBarData = [
    {
        
      name: 'Dashboard',
      link: '/dashboard',
      Icon:HomeOutlinedIcon,
      dropdown: null,
    },
    {
      name: 'Products',
      link: '/products',
      Icon:InventoryIcon,
      dropdown: [
        { name: 'Product List', link: '/products/list' ,Icon:null },
        { name: 'Add Product', link: '/products/add',Icon:null },
      ],
    },
    {
      name: 'Orders',
      link: '/orders',
      Icon:null,
      dropdown: [
        { name: 'Order List', link: '/orders/list' ,Icon:null},
        { name: 'Order Detail', link: '/orders/detail' ,Icon:null},
      ],
    },
    {
      name: 'Settings',
      link: '/settings',
      dropdown: null,
      Icon:null
    },
  ];
  
  export default sideBarData;
  