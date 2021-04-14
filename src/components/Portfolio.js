import React from 'react';
import Nav from './Nav';


export default function Portfolio (){

    return (
        <div className="portfolioPage">
        <Nav />

        <h1> PORTFOLIO </h1>
        <div className = "port-container"> 
        

{/* thumbnail */}
<img src={"https://i.ibb.co/sJFGrzL/image00001.jpg"} alt="image00001" border="0"/>

<img src={"https://i.ibb.co/Lvzy91B/image00002.jpg"} alt="image00002" border="0"/>

<img src={"https://i.ibb.co/MRBWVcw/image00003.jpg"} alt="image00003" border="0"/>

<img src={"https://i.ibb.co/TrJQd2V/image00004.jpg"} alt="image00004" border="0"/>

<img src={"https://i.ibb.co/ZHP4jvS/image00005.jpg"} alt="image00005" border="0"/>

<img src={"https://i.ibb.co/JqRcp1V/image00006.jpg"} alt="image00006" border="0"/>

<img src={"https://i.ibb.co/bKcrmwk/image00007.jpg"} alt="image00007" border="0"/>

<img src={"https://i.ibb.co/CQ2zXZx/image00008.jpg"} alt="image00008" border="0"/>

<img src={"https://i.ibb.co/Gs51bgv/image00009.jpg"} alt="image00009" border="0"/>

<img src={"https://i.ibb.co/D4hT2fV/image00010.jpg"} alt="image00010" border="0"/>

<img src={"https://i.ibb.co/kqZd79w/image00011.jpg"} alt="image00011" border="0"/>

<img src={"https://i.ibb.co/CpLysdT/image00012.jpg"} alt="image00012" border="0"/>

<img src={"https://i.ibb.co/8872zgy/image00013.jpg"} alt="image00013" border="0"/>

<img src={"https://i.ibb.co/74NrwLS/image00014.jpg"} alt="image00014" border="0"/>

<img src={"https://i.ibb.co/zXVzGT5/image00015.jpg"} alt="image00015" border="0"/>

<img src={"https://i.ibb.co/Wk8mxVt/image00016.jpg"} alt="image00016" border="0"/>

<img src={"https://i.ibb.co/b6Hbdsb/image00017.jpg"} alt="image00017" border="0"/>

<img src={"https://i.ibb.co/rcM66Jf/image00018.jpg"} alt="image00018" border="0"/>

<img src={"https://i.ibb.co/CsHS940/image00019.jpg"} alt="image00019" border="0"/>

<img src={"https://i.ibb.co/fqXm3J9/image00020.jpg"} alt="image00020" border="0"/>

<img src={"https://i.ibb.co/W55s3Dw/image00021.jpg"} alt="image00021" border="0"/>

<img src={"https://i.ibb.co/yghCPhk/image00022.jpg"} alt="image00022" border="0"/>

<img src={"https://i.ibb.co/YBf6DTF/image00023.jpg"} alt="image00023" border="0"/>

<img src={"https://i.ibb.co/3kr3CqY/image00024.jpg"} alt="image00024" border="0"/>

<img src={"https://i.ibb.co/6H5kTby/image00025.jpg"} alt="image00025" border="0" />


{/* large size img */}
{/* 
<a href="https://ibb.co/sJFGrzL"><img src="https://i.ibb.co/dJQqyxn/image00001.jpg" alt="image00001" border="0"></a>
<a href="https://ibb.co/Lvzy91B"><img src="https://i.ibb.co/SJXgVBH/image00002.jpg" alt="image00002" border="0"></a>
<a href="https://ibb.co/MRBWVcw"><img src="https://i.ibb.co/sFWkwKx/image00003.jpg" alt="image00003" border="0"></a>
<a href="https://ibb.co/TrJQd2V"><img src="https://i.ibb.co/M9KzQSY/image00004.jpg" alt="image00004" border="0"></a>
<a href="https://ibb.co/ZHP4jvS"><img src="https://i.ibb.co/CJZCc46/image00005.jpg" alt="image00005" border="0"></a>
<a href="https://ibb.co/JqRcp1V"><img src="https://i.ibb.co/W0WHzhZ/image00006.jpg" alt="image00006" border="0"></a>
<a href="https://ibb.co/bKcrmwk"><img src="https://i.ibb.co/Vqfv9ns/image00007.jpg" alt="image00007" border="0"></a>
<a href="https://ibb.co/CQ2zXZx"><img src="https://i.ibb.co/jDRTx27/image00008.jpg" alt="image00008" border="0"></a>
<a href="https://ibb.co/Gs51bgv"><img src="https://i.ibb.co/M8Cj3qD/image00009.jpg" alt="image00009" border="0"></a>
<a href="https://ibb.co/D4hT2fV"><img src="https://i.ibb.co/8MqtZgK/image00010.jpg" alt="image00010" border="0"></a>
<a href="https://ibb.co/kqZd79w"><img src="https://i.ibb.co/7rh9fRZ/image00011.jpg" alt="image00011" border="0"></a>
<a href="https://ibb.co/CpLysdT"><img src="https://i.ibb.co/20JrY2f/image00012.jpg" alt="image00012" border="0"></a>
<a href="https://ibb.co/8872zgy"><img src="https://i.ibb.co/ggRwvZ0/image00013.jpg" alt="image00013" border="0"></a>
<a href="https://ibb.co/74NrwLS"><img src="https://i.ibb.co/DpgwxT1/image00014.jpg" alt="image00014" border="0"></a>
<a href="https://ibb.co/zXVzGT5"><img src="https://i.ibb.co/N92MZd3/image00015.jpg" alt="image00015" border="0"></a>
<a href="https://ibb.co/Wk8mxVt"><img src="https://i.ibb.co/rx8D7ds/image00016.jpg" alt="image00016" border="0"></a>
<a href="https://ibb.co/b6Hbdsb"><img src="https://i.ibb.co/cybYT6Y/image00017.jpg" alt="image00017" border="0"></a>
<a href="https://ibb.co/rcM66Jf"><img src="https://i.ibb.co/xfGjjQ8/image00018.jpg" alt="image00018" border="0"></a>
<a href="https://ibb.co/CsHS940"><img src="https://i.ibb.co/S73ZmHv/image00019.jpg" alt="image00019" border="0"></a>
<a href="https://ibb.co/fqXm3J9"><img src="https://i.ibb.co/zQmK3dF/image00020.jpg" alt="image00020" border="0"></a>
<a href="https://ibb.co/W55s3Dw"><img src="https://i.ibb.co/GppFJsL/image00021.jpg" alt="image00021" border="0"></a>
<a href="https://ibb.co/yghCPhk"><img src="https://i.ibb.co/HGNy4NP/image00022.jpg" alt="image00022" border="0"></a>
<a href="https://ibb.co/YBf6DTF"><img src="https://i.ibb.co/9HyJw3k/image00023.jpg" alt="image00023" border="0"></a>
<a href="https://ibb.co/3kr3CqY"><img src="https://i.ibb.co/nRgGLv8/image00024.jpg" alt="image00024" border="0"></a>
<a href="https://ibb.co/6H5kTby"><img src="https://i.ibb.co/HtQjbYK/image00025.jpg" alt="image00025" border="0"></a> */}

        </div> 

        </div>
    )
}