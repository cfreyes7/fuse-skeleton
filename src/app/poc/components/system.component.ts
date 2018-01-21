import {Component, Injector, OnInit} from '@angular/core';
import {BaseForm} from '../../core/base-form';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'flox-quick-case',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent extends BaseForm implements OnInit {
  systems: any;
  details: any;
  mode: string;

  constructor(injector: Injector) {
    super(injector);
    this.mode = 'list';
    this.systems = [
      {
        text: 'Cardiovascular'
      },
      {
        text: 'Respiratory'
      },
      {
        text: 'Gastrointestinal'
      },
      {
        text: 'Urinary'
      },
      {
        text: 'Reproductive'
      },
      {
        text: 'Endocrine'
      },
      {
        text: 'Hematologic'
      },
      {
        text: 'Muskuloskeletal'
      },
      {
        text: 'Neorological'
      },
      {
        text: 'Integumentary'
      }
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
                text: 'Decresead cardiac rhythm',
                active: true
              },
              {
                text: 'Rare heart',
                active: true
              },
              {
                text: 'Chest pain',
                active: true
              },
              {
                text: 'Altereded vital signs',
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
  }
  
  changeMode($event) {
    this.mode = 'detail';
  }

}
