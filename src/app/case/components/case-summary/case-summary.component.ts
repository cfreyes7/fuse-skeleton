import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'flox-case-summary',
  templateUrl: './case-summary.component.html',
  styleUrls: ['./case-summary.component.scss']
})
export class CaseSummaryComponent implements OnInit {
  priority: any;
  priorities: Array<{ name: string, color: string }> = [];

  displayedColumnsSystems = ['check', 'name', 'edit'];
  dataSourceSystems = new MatTableDataSource<System>(ELEMENT_DATA_SYSTEM);
  details: any;


  constructor() {
    this.details = [
      {
        title: 'Problem or necessity',
        subdetail: [
          {
            items:
              [
                {
                  text: 'Excess or fluid deficit',
                  active: true
                },
                {
                  text: 'Decresead cardiac output',
                  active: true
                },
                {
                  text: 'Heart rate',
                  active: true
                },
                {
                  text: 'Chest pain',
                  active: true
                },
                {
                  text: 'Altered vital signs',
                  active: true
                },
                {
                  text: 'Pacermaker',
                  active: true
                },
                {
                  text: 'Increase or decrease of blood components',
                  active: true
                },
                {
                  text: 'Knowledge deficit',
                  active: true
                }
              ]
          }
        ]
      },
      {
        title: 'Treatment Goal / Functional Goal / Preferences',
        subdetail: [
          {
            title: 'Treatment Goal:',
            items: [
              {
                text: 'Blood pressure within normal limits and according to condition',
                active: true
              },
              {
                text: 'Adsence of dysrhythmia',
                active: true
              },
              {
                text: 'Patient expreses pain relief',
                active: true
              },
              {
                text: 'Normal hemodynamic status',
                active: true
              },
              {
                text: 'Maintain EHR within normal limits',
                active: true
              }
            ]
          },
          {
            title: 'Functional / Lifestyle Goal:',
            items: [
              {
                text: 'Improve diet, avoiding high caffeine foods and energy drinks. Patient prefer to add more fruits and vegetables to diet, and to drink more water.',
                active: true
              },
              {
                text: 'Promote physical activity according to medical limitations. The patient prefer to walk as exercise.',
                active: true
              },
              {
                text: 'Patient must take meds as prescribed. Patient prefers to take medications in the morning, because is better to remember.',
                active: true
              }
            ]
          }
        ]
      },
      {
        title: 'Interventions',
        subdetail: [
          {
            title: 'Cardiovascular system altered related to:',
            items: [
              {
                text: 'Heart rate monitor',
                active: true
              },
              {
                text: 'Perform ECG/EKG',
                active: false
              },
              {
                text: 'Measure income and egress',
                active: true
              },
              {
                text: 'Measure and record vital signs',
                active: false
              },
              {
                text: 'Daily weight',
                active: true
              },
              {
                text: 'Evaluate laboratory result',
                active: false
              },
              {
                text: 'Notify physician of changes in condition',
                active: false
              },
              {
                text: 'Estimate pain',
                active: true
              }
            ]
          }
        ]
      },
      {
        title: 'Barrier / Strategy',
        form: [
          {
            type: 'text',
            label: 'Barrier',
            value: ''
          },
          {
            type: 'text',
            label: 'Strategy',
            value: ''
          }
        ]
      },
      {
        title: 'Understanding',
        form: [
          {
            type: 'select',
            label: 'Predisposition',
            value: 'Low',
            options: ['Low', 'Medium', 'High']
          },
          {
            type: 'select',
            label: 'Understanding of POC',
            value: 'No',
            options: ['Yes', 'No']
          },
          {
            type: 'select',
            label: 'Final Rating',
            value: 'Low',
            options: ['Low', 'Medium', 'High']
          },
          {
            type: 'switch',
            label: 'Med Recon',
            value: true
          }
        ]
      }
    ];
  }

  ngOnInit() {

    this.priorities = [
      {
        name: 'Open Case',
        color: null
      }, {
        name: 'Close Case',
        color: 'warn'
      }
    ];
    this.priority = this.priorities[0];
  }

  setPriority(value: any) {
    this.priority = value;
  }
}

export interface System {
  name: string;
  check: boolean;
  edit: any;
}

const ELEMENT_DATA_SYSTEM: System[] = [
  {
    check: true,
    name: 'Cardiovascular',
    edit: null
  },
  {
    check: true,
    name: 'Respiratory',
    edit: null
  },

  {
    check: false,
    name: 'Gastroinstestinal',
    edit: null
  },
  {
    check: true,
    name: 'Urinary',
    edit: null
  },
  {
    check: true,
    name: 'Reproductive',
    edit: null
  },

  {
    check: false,
    name: 'Endocrine',
    edit: null
  },

  {
    check: true,
    name: 'Hematologic',
    edit: null
  },

  {
    check: false,
    name: 'Muscoloskeletal',
    edit: null
  },

  {
    check: false,
    name: 'Neurological',
    edit: null
  },

  {
    check: true,
    name: 'Integumentary',
    edit: null
  },

  {
    check: true,
    name: 'Sensory',
    edit: null
  },

  {
    check: true,
    name: 'Pyschologic/Psychiatric',
    edit: null
  },
];
