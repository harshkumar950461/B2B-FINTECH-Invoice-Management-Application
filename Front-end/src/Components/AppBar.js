import '../css/AppBar.css';
import logo from './ABC_products.png';
import logo1 from './highradius.png';
import '../css/AppBar.css';
export default function AppBar() {
    return (
        <div>
            <div className="menu">
                <span className="Logo"><img src={logo} alt="logo" width='300' height='50' class="left"/></span>
                <span className="Logo">
                    <img src={logo1} alt="logo" width='250' height='50' class="center" />
                    </span> 
                    <h5 style={{ marginRight:950,marginTop:'-10px',marginBottom:10}}>Invoice Details</h5>
            </div>
            
        </div>
    )
};