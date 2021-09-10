import React,{Component} from "react";
import './styles/certificate.css';
import icon_filter from './images/icon_filter.png';
import icon_filter2 from './images/icon_filter2.png';
import icon_books from './images/icon_books.png';
import icon_window from './images/icon_window.png';
import file from './images/file.png';
import icon_paper from './images/icon_paper.png';
import icon_print from './images/icon_print.png';
import icon_download from './images/icon_download.png';
import logo_rounded1 from './images/logo_rounded1.png';
import logo_arrow from './images/logo_arrow.png';
import img_qr from './images/QR.png';
import img_art from './images/img_art.png';

class Certificate_ownership extends Component{

    render(){
        return (
           
        <div className="container_main">
             
           <div className="container_header">
                <img alt="" />
                <h1>Certificate of Ownership</h1>
            </div>
            <div className="icons-right">
                
                <ul>
                    <li><a href="">Share</a></li>
                    <li><a href=""><img src={icon_filter2} alt="" /></a></li>
                    <li><a href=""><img src={icon_window}alt="" /></a></li>
                    <li><a href=""><img src={icon_books} alt="" /></a></li>
                    <li><a href=""><img src={icon_filter} alt="" /></a></li>
                  </ul>
            </div>
            <div className="container_body">
                <div className="column1">
                    <div className="logo1">
                        <img src={logo_rounded1} alt="" />
                        <h3>artcyption</h3>
                    </div>
                    <div className="shape_blue">
                        <div className="img_qr">
                            <img src={img_qr} alt="" />
                        </div>
                        <div className="row_arrow">
                            <h3>ownership registration</h3>
                            <img src={logo_arrow} alt="" />
                        </div>
                            <div className="container_five_items">
                                <div className="item1">
                                    <div className="subitem1">
                                        <div className="shape_white"></div>
                                        <p>registration #</p>
                                    </div>
                                   <p className="subitem2">title of work</p>
                                </div>
                                <div className="item2">
                                    <div className="subitem1">
                                        <div className="shape_white"></div>
                                        <p>title</p>
                                    </div>
                                   <p className="subitem2">title</p>
                                </div>
                                <div className="item3">
                                    <div className="subitem1">
                                        <div className="shape_white"></div>
                                        <p>category</p>
                                    </div>
                                   <p className="subitem2">category</p>
                                </div>
                                <div className="item4">
                                    <div className="subitem1">
                                        <div className="shape_white"></div>
                                        <p>publication date</p>
                                    </div>
                                   <p className="subitem2">publication</p>
                                </div>
                                <div className="item5">
                                    <div className="subitem1">
                                        <div className="shape_white"></div>
                                        <p>copyright owner(s)</p>
                                    </div>
                                   <p  className="subitem2">copyright owner(s)</p>
                                </div>
                            </div>
                    
                      </div>
                      <div className="shape_gray">
                          <div className="container-footer">
                                <div className="footer-column1">
                                    <img src={img_art} alt="" />
                                </div>
                                <div className="footer-column2">
                                    <p>title</p>
                                    <p>medium</p>
                                    <p>dimensions</p>
                                    <p>limited edition</p>
                                    <p>price</p>
                                </div>
                          </div>
                          <div className="footer-text">
                              <p>time stamp | hash URL</p>
                          </div>
                      </div>
                   
                    
                </div>
                <div className="column2">
                    <div className="row1">
                        <h3>100 authorised copies</h3>
                        <p>click on the button below to download a CSV file of all the limited edition certificate numbers</p>
                    </div>
                    <div className="row2">
                        <div className="container_row2">
                      <a href="">
                      <p>download CSV</p>
                        <img src={file} alt="" />
                      </a>
                        </div>
                    </div>
                    <div className="row3">
                     
                            <a href="">Share</a>
                            <a href=""><img src={icon_paper} alt="" /></a>
                            <a href=""><img src={icon_download} alt="" /></a>
                            <a href=""><img src={icon_print} alt="" /></a>
                    </div>
                </div>
            </div>
         
        </div>
            );
    }
     
}

export default Certificate_ownership;