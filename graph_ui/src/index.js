import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Component1.css';
import './Component2.css';
import './Component3.css';
import './Component4.css';
import './Component5.css';
import './Component6.css';
import './Component7.css';
import reportWebVitals from './reportWebVitals';



class Component1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      count: 0,
      texts: ["Build a UI Graph Library to Visualize Data Relations",
              "Visualize Data Relations Through a UI Graph Library"
      ], 
      jsonData: {
        "resourceType": "Patient",
        "id": "example",
        "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p style=\"border: 1px #661AFF solid; background-color: #E6E6FF; padding: 10px;\"><b>Jim </b> male, DoB: 1974-12-25 ( Medical record number: 12345 (USUAL))</p><hr/><table class=\"grid\"><tr><td style=\"background-color: #F3F5DA\" title=\"Record is active\">Active:</td><td>true</td><td style=\"background-color: #F3F5DA\" title=\"Known status of Patient\">Deceased:</td><td colspan=\"3\">false</td></tr><tr><td style=\"background-color: #F3F5DA\" title=\"Alternate names (see the one above)\">Alt Names:</td><td colspan=\"3\"><ul><li>Peter James Chalmers (OFFICIAL)</li><li>Peter James Windsor (MAIDEN)</li></ul></td></tr><tr><td style=\"background-color: #F3F5DA\" title=\"Ways to contact the Patient\">Contact Details:</td><td colspan=\"3\"><ul><li>-unknown-(HOME)</li><li>ph: (03) 5555 6473(WORK)</li><li>ph: (03) 3410 5613(MOBILE)</li><li>ph: (03) 5555 8834(OLD)</li><li>534 Erewhon St PeasantVille, Rainbow, Vic  3999(HOME)</li></ul></td></tr><tr><td style=\"background-color: #F3F5DA\" title=\"Nominated Contact: Next-of-Kin\">Next-of-Kin:</td><td colspan=\"3\"><ul><li>Bénédicte du Marché  (female)</li><li>534 Erewhon St PleasantVille Vic 3999 (HOME)</li><li><a href=\"tel:+33(237)998327\">+33 (237) 998327</a></li><li>Valid Period: 2012 --&gt; (ongoing)</li></ul></td></tr><tr><td style=\"background-color: #F3F5DA\" title=\"Patient Links\">Links:</td><td colspan=\"3\"><ul><li>Managing Organization: <a href=\"organization-example-gastro.html\">Organization/1</a> &quot;Gastroenterology&quot;</li></ul></td></tr></table></div>"
        },
        "identifier": [
            {
                "use": "usual",
                "type": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                            "code": "MR"
                        }
                    ]
                },
                "system": "urn:oid:1.2.36.146.595.217.0.1",
                "value": "12345",
                "period": {
                    "start": "2001-05-06"
                },
                "assigner": {
                    "display": "Acme Healthcare"
                }
            }
        ],
        "active": true,
        "name": [
            {
                "use": "official",
                "family": "Chalmers",
                "given": ["Peter", "James"]
            },
            {
                "use": "usual",
                "given": ["Jim"]
            },
            {
                "use": "maiden",
                "family": "Windsor",
                "given": ["Peter", "James"],
                "period": {
                    "end": "2002"
                }
            }
        ],
        "telecom": [
            {
                "use": "home"
            },
            {
                "system": "phone",
                "value": "(03) 5555 6473",
                "use": "work",
                "rank": 1
            },
            {
                "system": "phone",
                "value": "(03) 3410 5613",
                "use": "mobile",
                "rank": 2
            },
            {
                "system": "phone",
                "value": "(03) 5555 8834",
                "use": "old",
                "period": {
                    "end": "2014"
                }
            }
        ],
        "gender": "male",
        "birthDate": "1974-12-25",
        "_birthDate": {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
                    "valueDateTime": "1974-12-25T14:35:45-05:00"
                }
            ]
        },
        "deceasedBoolean": false,
        "address": [
            {
                "use": "home",
                "type": "both",
                "text": "534 Erewhon St PeasantVille, Rainbow, Vic  3999",
                "line": ["534 Erewhon St"],
                "city": "PleasantVille",
                "district": "Rainbow",
                "state": "Vic",
                "postalCode": "3999",
                "period": {
                    "start": "1974-12-25"
                }
            }
        ],
        "contact": [
            {
                "relationship": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
                                "code": "N"
                            }
                        ]
                    }
                ],
                "name": {
                    "family": "du Marché",
                    "_family": {
                        "extension": [
                            {
                                "url": "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix",
                                "valueString": "VV"
                            }
                        ]
                    },
                    "given": ["Bénédicte"]
                },
                "telecom": [
                    {
                        "system": "phone",
                        "value": "+33 (237) 998327"
                    }
                ],
                "address": {
                    "use": "home",
                    "type": "both",
                    "line": ["534 Erewhon St"],
                    "city": "PleasantVille",
                    "district": "Rainbow",
                    "state": "Vic",
                    "postalCode": "3999",
                    "period": {
                        "start": "1974-12-25"
                    }
                },
                "gender": "female",
                "period": {
                    "start": "2012"
                }
            }
        ],
        "managingOrganization": {
            "reference": "Organization/1"
        }
      }
    };
  }
  add = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  subtract = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  }

  changeTitle = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.texts.length
    }));
  }

  render() {
    return (
      <div className="title-background">
        <h1>{this.state.texts[this.state.currentIndex]}</h1>
        <h2>Jasmine Ward</h2>
        <div className="countersetup">
          <button onClick={this.subtract}>-</button>
          <span>{this.state.count}</span>
          <button onClick={this.add}>+</button>
          <button onClick={this.changeTitle}><p>Click this to change the title.</p></button>
        </div>
      </div>
    );
  }
}

class Component2 extends React.Component {
  render() {
    return (
      <div className="list-background">
        <p><strong>List of Components</strong></p>
        <p>Title & Name</p>
        <p>Photo with Link</p>
        <p>Views</p>
        <p>Change Title</p>
        <p>Delete Me Button</p>
      </div>
    );
  }
}

class Component3 extends React.Component {
  render() {
    return (
      <a href="https://cdn.pixabay.com/photo/2016/08/03/01/08/pink-1565596_1280.jpg" target="_blank">
      <img src="https://cdn.pixabay.com/photo/2016/08/03/01/08/pink-1565596_1280.jpg" alt="watercolor" style={{ width: '400px', height: '380px', borderRadius: '15px' }} />
      </a>
    )
  }
}

class Component4 extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      currentIndex: 0,
      texts: ["Click on the photo to find the URL it was sourced from and be brought to that page in a new tab. This method simply consisted of a reference tag bracketed outside of the image, loading directly from the website it is linked to.", 
            "Click on the counter under the title to make the number fluctuate by 1. This method consisted of setting the state of the counter number and using the properties of the previous state when adding and subtracting to adjust the counter number.", 
            "This toggle screen was made using the same method the counter was made with, by setting the current state to the current index of text, and using the two buttons.  We include an addition of the array length in code for the 'previous' button to keep the selection within range before the modulo is used, meaning that in the array of [0,1,2], when subtracting from 0, since there are 3 items in the array, '3' will be added to the new '-1' created and bring you around to '2', the end. The modulo is used in each to keep the array within range, meaning if the result goes from ‘1’ to '4' due to the addition from the ‘previous’ button it will go back to '1', the beginning, and with the ‘next’ button, if the result comes to ‘3’, it will send it to ‘0’."]
        } 
      };
  buttonNext = () => { 
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.texts.length
    })); 
  } 
  buttonPrev = () => { 
    this.setState((prevState) => ({ 
      currentIndex: (prevState.currentIndex - 1 + prevState.texts.length) % prevState.texts.length
    })); 
  } 
  render() {
    return ( 
      <div className="button-background"> 
        <button onClick={this.buttonPrev}>Prev</button> 
        <div className="toggle"> 
          {this.state.texts[this.state.currentIndex]} 
        </div> 
        <button onClick={this.buttonNext}>Next</button> 
      </div> 
    ); 
  }} 
 
  class Component5 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentIndex: 0,
        isHidden: false,
        texts: ["DELETE ME!"]
      }
    };

    delete = () => {
      this.setState((prevState) => ({
        isHidden: true
      }));
    }

    render() {
      return (
        !this.state.isHidden && (
        <button className="deleteMeButton" onClick={this.delete}>{this.state.texts[this.state.currentIndex]}</button>
      )
    );
    }
  }


  class Component6 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        jsonData: {
          "resourceType": "Patient",
          "id": "example",
          "text": {
              "status": "generated",
              "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p style=\"border: 1px #661AFF solid; background-color: #E6E6FF; padding: 10px;\"><b>Jim </b> male, DoB: 1974-12-25 ( Medical record number: 12345 (USUAL))</p><hr/><table class=\"grid\"><tr><td style=\"background-color: #F3F5DA\" title=\"Record is active\">Active:</td><td>true</td><td style=\"background-color: #F3F5DA\" title=\"Known status of Patient\">Deceased:</td><td colspan=\"3\">false</td></tr><tr><td style=\"background-color: #F3F5DA\" title=\"Alternate names (see the one above)\">Alt Names:</td><td colspan=\"3\"><ul><li>Peter James Chalmers (OFFICIAL)</li><li>Peter James Windsor (MAIDEN)</li></ul></td></tr><tr><td style=\"background-color: #F3F5DA\" title=\"Ways to contact the Patient\">Contact Details:</td><td colspan=\"3\"><ul><li>-unknown-(HOME)</li><li>ph: (03) 5555 6473(WORK)</li><li>ph: (03) 3410 5613(MOBILE)</li><li>ph: (03) 5555 8834(OLD)</li><li>534 Erewhon St PeasantVille, Rainbow, Vic  3999(HOME)</li></ul></td></tr><tr><td style=\"background-color: #F3F5DA\" title=\"Nominated Contact: Next-of-Kin\">Next-of-Kin:</td><td colspan=\"3\"><ul><li>Bénédicte du Marché  (female)</li><li>534 Erewhon St PleasantVille Vic 3999 (HOME)</li><li><a href=\"tel:+33(237)998327\">+33 (237) 998327</a></li><li>Valid Period: 2012 --&gt; (ongoing)</li></ul></td></tr><tr><td style=\"background-color: #F3F5DA\" title=\"Patient Links\">Links:</td><td colspan=\"3\"><ul><li>Managing Organization: <a href=\"organization-example-gastro.html\">Organization/1</a> &quot;Gastroenterology&quot;</li></ul></td></tr></table></div>"
          },
          "identifier": [
              {
                  "use": "usual",
                  "type": {
                      "coding": [
                          {
                              "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                              "code": "MR"
                          }
                      ]
                  },
                  "system": "urn:oid:1.2.36.146.595.217.0.1",
                  "value": "12345",
                  "period": {
                      "start": "2001-05-06"
                  },
                  "assigner": {
                      "display": "Acme Healthcare"
                  }
              }
          ],
          "active": true,
          "name": [
              {
                  "use": "official",
                  "family": "Chalmers",
                  "given": ["Peter", "James"]
              },
              {
                  "use": "usual",
                  "given": ["Jim"]
              },
              {
                  "use": "maiden",
                  "family": "Windsor",
                  "given": ["Peter", "James"],
                  "period": {
                      "end": "2002"
                  }
              }
          ],
          "telecom": [
              {
                  "use": "home"
              },
              {
                  "system": "phone",
                  "value": "(03) 5555 6473",
                  "use": "work",
                  "rank": 1
              },
              {
                  "system": "phone",
                  "value": "(03) 3410 5613",
                  "use": "mobile",
                  "rank": 2
              },
              {
                  "system": "phone",
                  "value": "(03) 5555 8834",
                  "use": "old",
                  "period": {
                      "end": "2014"
                  }
              }
          ],
          "gender": "male",
          "birthDate": "1974-12-25",
          "_birthDate": {
              "extension": [
                  {
                      "url": "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
                      "valueDateTime": "1974-12-25T14:35:45-05:00"
                  }
              ]
          },
          "deceasedBoolean": false,
          "address": [
              {
                  "use": "home",
                  "type": "both",
                  "text": "534 Erewhon St PeasantVille, Rainbow, Vic  3999",
                  "line": ["534 Erewhon St"],
                  "city": "PleasantVille",
                  "district": "Rainbow",
                  "state": "Vic",
                  "postalCode": "3999",
                  "period": {
                      "start": "1974-12-25"
                  }
              }
          ],
          "contact": [
              {
                  "relationship": [
                      {
                          "coding": [
                              {
                                  "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
                                  "code": "N"
                              }
                          ]
                      }
                  ],
                  "name": {
                      "family": "du Marché",
                      "_family": {
                          "extension": [
                              {
                                  "url": "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix",
                                  "valueString": "VV"
                              }
                          ]
                      },
                      "given": ["Bénédicte"]
                  },
                  "telecom": [
                      {
                          "system": "phone",
                          "value": "+33 (237) 998327"
                      }
                  ],
                  "address": {
                      "use": "home",
                      "type": "both",
                      "line": ["534 Erewhon St"],
                      "city": "PleasantVille",
                      "district": "Rainbow",
                      "state": "Vic",
                      "postalCode": "3999",
                      "period": {
                          "start": "1974-12-25"
                      }
                  },
                  "gender": "female",
                  "period": {
                      "start": "2012"
                  }
              }
          ],
          "managingOrganization": {
              "reference": "Organization/1"
          }
        }
      };
    }
  
    handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = JSON.parse(e.target.result);
          this.setState({ jsonData: data });
        };
        reader.readAsText(file);
      }
    };
  
    isObject = (value) => {
      return typeof(value) == 'object';
    }

    prettyPrint = (jsonData, indent=0) => {
      let result = {};
      
      for(var key in jsonData) {
        let value = jsonData[key];

        let modifiedKey = indent + " " + key;

        if (this.isObject(value)) {

          if(!value?.length) {
            value = this.prettyPrint(value, indent+1)
          } else {
            let newValue = []
            for(var key2 in value) {
              let value2 = value[key2];

              value2 = this.isObject(value2) ? this.prettyPrint(value2, indent+1) : value2;
              newValue.push(value2);
            }

            value = newValue;
          }
        }
        result[modifiedKey] = value;
      }
      return result;
    }

    render() {
      const { jsonData } = this.state;
  
      return (
        <div>
          <input
            type="file"
            onChange={this.handleFileChange}
            className="upload"
          />
          {jsonData && (
              <pre>{JSON.stringify(this.prettyPrint(jsonData), null, 2)}</pre>

            
          )}
        </div>
      );
    }
  }


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <div className="forTitleChange"><Component1 /></div>
    <div className="main-background">
      <div className="first-row">
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 /></div>
      <div className="second-row">
      <Component6 />
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals