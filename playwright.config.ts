import { defineConfig, devices } from '@playwright/test'
import { TestOptions } from './test-options'

export default defineConfig<TestOptions>({

   testDir: './tests',
  timeout: 90000,
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
    actionTimeout: 60000,
    navigationTimeout: 60000,
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
  command: 'npm run start -- --host 0.0.0.0',
  url: 'http://127.0.0.1:4200',
  reuseExistingServer: true,
  timeout: 300000
}
}) 