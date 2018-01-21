import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';

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

  patients: Array<{   
    name: any,
    dob: any,
    gender: any,
    avatar: any,
    updated: any,
    type: any,
    id: any;
    status: any;
    pocType: any;
    mainDx: any;
  }> = [];

  public id: string;

  constructor(private route: ActivatedRoute) {

    this.id = this.route.snapshot.paramMap.get('id');

    this.patients = [
      { name: 'James Travis', dob: 'Jan 12 1976', gender: 'Male', avatar: 'james', updated: 'Jan 12, 2018', type: '11 or more Rxs', status: 'Open', id: 1, pocType: null, mainDx: 'R53.81 Other malaise / SO2.40DD Maxillary fracture, left side, 7thD' },
      { name: 'Katherine Smith', dob: 'Jan 12 1976', gender: 'Female', avatar: 'katherine', updated: 'Jan 13, 2018', type: 'DM', status: 'Closed', id: 2, pocType: null, mainDx: 'Unknown' },
      { name: 'Katina Aals', dob: 'Jan 12 1976', gender: 'Female', avatar: 'Katina', updated: 'Jan 13, 2018', type: 'Hospitalization', status: 'Extended', id: 3, pocType: 'SNF', mainDx: 'Unknown' },
      { name: 'Helen M. Chacon', dob: 'Jan 12 1976', gender: 'Female', avatar: 'Helen', updated: 'Jan 13, 2018', type: 'Hospitalization', status: 'Extended', id: 4, pocType: 'OBS', mainDx: 'F10.129 Alcohol Abuse With Intoxication, Unspecified' },
      { name: 'Elizabeth T. McInnis', dob: 'Jan 12 1976', gender: 'Female', avatar: 'Josefina', updated: 'Jan 13, 2018', type: 'Hospitalization', status: 'Open', id: 5, pocType: 'INPATIENT', mainDx: 'R56.9 UNSPECIFIED CONVULSIONS' },
      { name: 'Ronald A. Darlington', dob: 'Jan 12 1976', gender: 'Male', avatar: 'vincent', updated: 'Jan 13, 2018', type: 'Hospitalization', status: 'Open', id: 6, pocType: 'SNF', mainDx: ' Z96.641 Presence of right artificial hip joint' },
      { name: 'Ariel R. Keyes', dob: 'Jan 12 1976', gender: 'Male', avatar: 'Arnold', updated: 'Jan 13, 2018', type: 'Hospitalization', status: 'Open', id: 7, pocType: 'REHAB', mainDx: 'N17.9 Acute Kidney Failure, Unspecified' },
      { name: 'James M. Simmons', dob: 'Jan 12 1976', gender: 'Male', avatar: 'garry', updated: 'Jan 13, 2018', type: 'Hospitalization', status: 'Open', id: 8, pocType: 'ER', mainDx: 'Unknown' },
      { name: 'Mae A. Davis', dob: 'Jan 12 1976', gender: 'Female', avatar: 'Odessa', updated: 'Jan 13, 2018', type: 'Hospitalization', status: 'Open', id: 9, pocType: 'OBS to Inpatient', mainDx: 'R42 DIZZINESS AND GIDDINESS R51 HEADACHE' },
      { name: 'Robert T. Meneses', dob: 'Jan 12 1976', gender: 'Male', avatar: 'Tyson', updated: 'Jan 13, 2018', type: 'Referred Pts', status: 'Open', id: 10, pocType: null, mainDx: 'Unknown' },
    ];

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
