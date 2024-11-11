import { LightningElement, api, track } from "lwc";

export default class crash_Course_Project extends LightningElement {
  @api first_name = "Rupesh"; // api decorator makes as public variable and it can be access from outside of the class
  last_name = "Kumar";
  full_name = this.first_name + " " + this.last_name;
  //track decorator makes as sync to html page.
  @track contacts = [
    {
      id: "5b2eee0a8fdd5b71c8148490",
      age: 29,
      name: "Campos York",
      gender: "male",
      company: "AVENETRO",
      email: "camposyork@avenetro.com",
      photo: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      id: "5b2eee0a9cd29e820c10edad",
      age: 20,
      name: "Esperanza Boone",
      gender: "female",
      company: "COSMETEX",
      email: "esperanzaboone@cosmetex.com",
      photo: "https://randomuser.me/api/portraits/men/48.jpg"
    },
    {
      id: "5b2eee0a582ba867abbd7ce7",
      age: 39,
      name: "Holden Barry",
      gender: "male",
      company: "CODAX",
      email: "holdenbarry@codax.com",
      photo: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      id: "5b2eee0afe5f471c63fa7acf",
      age: 22,
      name: "Daniels Barlow",
      gender: "male",
      company: "OPTICOM",
      email: "danielsbarlow@opticom.com",
      photo: "https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
      id: "5b2eee0af534aab9ece2f890",
      age: 23,
      name: "Leigh Burris",
      gender: "female",
      company: "KINETICUT",
      email: "leighburris@kineticut.com",
      photo: "https://randomuser.me/api/portraits/men/43.jpg"
    },
    {
      id: "5b2eee0ac42f319d1c980d93",
      age: 35,
      name: "Floyd Little",
      gender: "male",
      company: "FURNAFIX",
      email: "floydlittle@furnafix.com",
      photo: "https://randomuser.me/api/portraits/men/40.jpg"
    },
    {
      id: "5b2eee0a20b705a9c1d4b8c9",
      age: 28,
      name: "Josie Henson",
      gender: "female",
      company: "MICROLUXE",
      email: "josiehenson@microluxe.com",
      photo: "https://randomuser.me/api/portraits/men/43.jpg"
    },
    {
      id: "5b2eee0a6fb14c569982fa9d",
      age: 37,
      name: "Carrillo Harmon",
      gender: "male",
      company: "PHOTOBIN",
      email: "carrilloharmon@photobin.com",
      photo: "https://randomuser.me/api/portraits/men/38.jpg"
    },
    {
      id: "5b2eee0a956cbb97ebf666c7",
      age: 20,
      name: "Wilkerson Zamora",
      gender: "male",
      company: "EVEREST",
      email: "wilkersonzamora@everest.com",
      photo: "https://randomuser.me/api/portraits/men/42.jpg"
    }
  ];
}
