public class piechart {
/**
  body {
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  color: #fbfbfc;
  font-family: 'Montserrat', sans-serif;
}

.icon {
  vertical-align: middle;
  line-height: 1px;
  font-size: 20px;
}
.icon_header {
  vertical-align: middle;
  line-height: 1px;
  font-size: 26px;
}
.icon, .icon_header {
  margin-right: 5px;
}

.close_icon {
  color: red;
  margin-left: 30px;
  margin-top: 10px;
  cursor: pointer;
}

.grid-container {
  display: grid;
  grid-template-columns: 260px 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 3fr;
  grid-template-areas:
    'sidebar header header header'
    'sidebar main main main';
  height: 100vh;
}

Header  
.header {
  grid-area: header;
  height: 60px;
  width: -100px;
  display: flex;
  background-color: #1976d2;
  color: #ffffff;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  box-shadow: 0 6px 7px -3px rgba(0, 0, 0, 0.35);
}

.menu-icon {
  display: none;
}

#sidebar {
  grid-area: sidebar;
  background-color: #1976d2;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}

.sidebar-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px 0px 30px;
  margin-bottom: 30px;
}

.sidebar-title > span {
  display: none;
}

.sidebar-brand {
  margin-top: 15px;
  font-size: 20px;
  font-weight: 700;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  padding: 20px;
}

.sidebar-list {
  padding: 10px 20px;
  list-style-type: none;
  margin-bottom: 20px;
}

.sidebar-list-item {
  padding: 10px 20px;
  font-size: 18px;
  color: #0d0d0e;
  font-weight: bold;
}

.date-picker-container {
  margin-bottom: 20px;
  margin-left: 30px;
}

.react-datepicker__input-container input {
  background-color: white; Change background color to white 
  color: #0d0d0e; Set text color 
}
 
.react-datepicker {
  background-color: white; Change background color to white 
  color: #0d0d0e; Set text color 
}
 
.react-datepicker__day--selected {
  background-color: #1976d2; Change background color of selected day 
  color: white; Set text color of selected day 
}
 
.react-datepicker__day:hover {
  background-color: #f0f0f0; Change background color of hovered day 
}

.sidebar-list-item:hover {
  background-color: rgba(2, 2, 2, 0.2);
  cursor: pointer;
}

.sidebar-list-item > a {
  text-decoration: none;
  color: #0d0d0e;
  font-size: 16px;
  font-weight: bold;
  padding: 5px 5px 5px 5px  ;
}

.sidebar-responsive {
  display: inline !important;
  position: absolute;

  z-index: 12 !important;
}

body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #ffffff;
}

#root {
  height: 100%;
}

.main-container {
  grid-area: main;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #ffffff;
  overflow: auto;
  padding: 20px 20px;
  color: rgba(7, 7, 7, 0.95);
  margin: 0;
}

.main-title {
  display: flex;
  justify-content: space-between;
}

.main-cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin: 15px 0;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px 15px;
  border-radius: 5px;
}

.card:first-child {
  background-color: #ce93d8;
}

.card:nth-child(2) {
  background-color: #f44336;
}

.card:nth-child(3) {
  background-color: #ffa726;
}

.card:nth-child(4) {
  background-color: #29b6f6;
}

.card:nth-child(5) {
  background-color: #66bb6a;
}

.card:nth-child(6) {
  background-color: #FFB6C1;
}

.card:nth-child(7) {
  background-color: #ADFF2F
  ;
}

.card-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-inner > .card_icon {
  font-size: 25px;
}

.charts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 60px;
  height: 300px;
}

  
@media screen and (max-width: 992px) {
  .grid-container {
    display: flex;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 3fr;
    grid-template-areas:
      'header'
      'main';
  }

  #sidebar {
    display: none;
  }

  .menu-icon {
    display: inline;
  }

  .sidebar-title > span {
    display: inline;
  }
}
Small <= 768px 
  
@media screen and (max-width: 768px) {
  .main-cards {
    grid-template-columns: 1fr;
    gap: 10px;
    margin-bottom: 0;
  }

  .charts {
    grid-template-columns: 1fr;
    margin-top: 30px;
  }
}

Extra Small <= 576px 

@media screen and (max-width: 576px) {
  .hedaer-left {
    display: none;
  }
}

**/

}