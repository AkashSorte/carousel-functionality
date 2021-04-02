import React, {useState} from 'react';
import './dropdown.css'
import images from './img/image';

const Dropdown = () => {

    const [open, setOpen] = useState(false);
    const [selectedPrinter, setSelectedPrinter] = useState({});

    function handleButtonClick() {
        setOpen(!open);
      };

    const printerOption = [{
      key: "officeJet",
      value: "HP OfficeJet Pro",
      img: images[0]
    },{
      key: "laserJet",
      value: "HP LaserJet Pro",
      img: images[1]
    },{
      key: "neverStop",
      value: "HP Neverstop Pro",
      img: images[2]
    }];  

    function selectPrinter(key) {
      const selectedPrinter = printerOption.find(x => x.key === key);
      setSelectedPrinter(selectedPrinter);
      setOpen(false);
    }

    return (
        <div className="wrapper">
          <div className="dropdown-container">
            <button type="button" className="button" onTouchEnd={handleButtonClick}>
              {selectedPrinter && selectedPrinter.key ? <div className="options" style={{ width: "100%"}}>
                        <div className="options-img" style={{backgroundImage: `url("${selectedPrinter.img}")`}}/>
                        <div className="options-value">{selectedPrinter.value}</div>
                        </div> :<div>Select Printer</div>} 
              <i className={`arrow ${open? "up" : "down"}`}></i>
            </button>
            {open && <div className="dropdown">
                <ul> 
                  {printerOption.map((printer) => {
                    return <li key={printer.key}><div className="options" onTouchEnd={() => selectPrinter(printer.key)}>
                        <div className="options-img" style={{backgroundImage: `url("${printer.img}")`}}/>
                        <div className="options-value">{printer.value}</div>
                        </div>
                      </li>
                  })}
                </ul>
            </div>}
          </div>
        </div>
      );
}

export default Dropdown;