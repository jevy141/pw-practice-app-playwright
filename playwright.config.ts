import { defineConfig, devices } from '@playwright/test'
import { TestOptions } from './test-options'

export default defineConfig<TestOptions>({

   testDir: './tests',
  timeout: 40000,
  //globalTimeout: 60000,

  expect: {
    timeout: 2000,
    toMatchSnapshot :{maxDiffPixels : 50}
  },

  retries: 1,
  reporter: [ 
             ['json', { outputFile : 'test-results/jsonReport.json'}],
             
             ['junit', { outputFile : 'test-results/junitReport.xml'}],
            
             ['allure-playwright'],

             ['html']

            ] ,


  use: {

    globalsQaURL:'https://www.globalsqa.com/demo-site/draganddrop/',
    baseURL: 'http://localhost:4200/',
    trace: 'on-first-retry',
    actionTimeout: 20000,
    navigationTimeout: 25000,
    video: {
      mode: 'off',
      size: { width: 1920, height: 1080 }
    }
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'http://localhost:4200/'
      }
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        baseURL: 'http://localhost:4200/'
      }
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        baseURL: 'http://localhost:4200/'
      }
    },
    //this if particular test file you want full screen run
    {
       name : 'pageObjectFullScreen',
       testMatch : 'usePageObjects.spec.ts',
       use :{
        ...devices['Desktop Chrome'], 
        baseURL: 'http://localhost:4200/', 
        viewport : {width : 1920 , height : 1080}
       }
    },
    {
      name : 'mobile' ,
      testMatch : 'testMobile.spec.ts',
      use :{
        ...devices['iPhone 13 Pro']
      }
    }
  ],
//starting webserver automatically 
  webServer: {
    command : 'npm run start',
     url : 'http://localhost:4200/',
       timeout: 120000,
       reuseExistingServer: true
  }
}) 