import typescriptImage from 'assets/images/typescript.svg'
import go_logo from 'assets/images/Go_Logo_Blue.svg'
import javascriptPic from 'assets/images/javascript.png'
import nodejsPic from 'assets/images/node-js-svgrepo-com.svg'
import svetlePic from 'assets/images/svetle.png'
import addressPic from 'assets/images/address-icon.png'
import mobilePic from 'assets/images/mobile-icon.png'
import githubPic from 'assets/images/github-icon.png'
import elasticPic from 'assets/images/elastic.png'
import redisPic from 'assets/images/redisPic.png'
import sqlPic from 'assets/images/sqlIcon.png'
const arrayTechPics = [
  typescriptImage,
  githubPic,
  javascriptPic,
  elasticPic,
  nodejsPic,
  redisPic,
  svetlePic,
  go_logo,
  sqlPic
]

export default function CV() {
  return (
    <div className='w-full bg-gray-400 px-4 py-6'>
      <div className='sm:max-w-[720px] md:max-w-[1200px] mx-auto bg-white/80 rounded-sm'>
        {/* lequangbao info */}
        <div className='px-4 py-2 font-mono'>
          <div className='user_info'>
            <div className='title text-gray-600 font-semibold'> LÊ QUANG BẢO -FULLSTACK DEVELOPER</div>
            <div className='user_infos mt-3 mb-2 border border-gray-300 shadow-sm py-2 px-4'>
              <div className='user_phone flex items-center justify-start'>
                <img src={githubPic} className='w-7 h-7 mr-2' alt='' />
                <span>https://github.com/LeQuangBao0126</span>
              </div>
              <div className='user_phone flex items-center justify-start'>
                <img src={mobilePic} className='w-7 h-7 mr-2' alt='' />
                <span>0768183903</span>
              </div>
              <div className='user_address flex items-center justify-start'>
                <img src={addressPic} className='w-7 h-7 mr-2' alt='' />
                <span> HCM city</span>
              </div>
              <div className='user_overview'>
                I have about 3 years of experience developing back-end (Web services Restful API) and front-end side,
                and would like to join a Backend team to work and become a technical expert to support members other
              </div>
            </div>
          </div>
        </div>
        {/* tech stack blocks */}
        <div className='flex justify-start items-center px-4 py-7'>
          {arrayTechPics.map((item, index) => (
            <span className={`rounded-sm shadow-sm w-14 h-14 mr-5  `}>
              <img src={item} alt='a' className={`w-14 h-14 rounded-sm ${index % 2 === 0 ? 'mt-5' : ''}`} />
            </span>
          ))}
        </div>
        {/* end tech stack blocks */}
        {/* start projects info */}
        <div className='px-4 py-2 font-mono'>
          <div className='text-xl '>Side Projects (2 projects NODEJS API)</div>
          <div className='compayny_info border border-gray-300 shadow-sm px-2 py-3 font-mono'>
            <div className='introduce_company'>
              <p className='text-md'>
                <strong>Project : Social Media Clone</strong>
              </p>
              <p className='text-sm'>
                This project is learning from another SENIOR GUY to gain knowledge about
                <strong>nodejs and typescript in hands-on in real life (APIS only)</strong>
                <br />
              </p>
              <p className='text-sm'>
                Main Features : <br />
                <strong>- Services Repositories modules architecture , and Class Based API service </strong>
                <br />
                <strong>- Error handling</strong>
                <br />
                <strong>- PROMISE</strong> features for more IO operations like (query DB, processing VIDEO when
                uploaded)
                <br />
                <strong>- Indexing MongoDB </strong>
                <br />
                <strong>
                  - Nodejs Streamming Video OR File Or Image : HTTP Live Streaming (HLS) for m3u8 video (I'm not focus
                  more on this .just learning)
                </strong>
              </p>
              <p className='text-sm'>GITHUB : https://github.com/LeQuangBao0126/base-project-setup-node-typescript</p>
              <p className='text-sm text-orange-800 font-bold'>
                <span className='text-orange-800 font-bold'>-Language : Typescript, Express.js, Eslint, Prettier</span>{' '}
                <br />
                <span>-Storage Data: NoSQL (MongoDB Cloud) </span>
                <br />
                <span>-Build Tool : Vite</span>
                <br />
                <span>-Authentication: JWT (access token, refresh token) </span>
                <br />
                <span>
                  -Email Service: <span className='text-black'>to be UPDATING ... </span>{' '}
                </span>
                <br />
                <span>-File Handling: Fomidable Upload and resize image, video</span>
                <br />
                <span>-Streaming: Node.js Stream & HLS (HTTP Live Streaming)</span>
                <br />
                <span>
                  -Websocket: <span className='text-black'>to be UPDATING ... </span>{' '}
                </span>
                <br />
                <span>-TypeODM: MongoDB Native Driver for Nodejs</span>
                <br />
                <span>
                  -Deployment: <span className='text-black'>to be UPDATING ... </span>
                </span>
                <br />
              </p>
            </div>
            {/* trelo section */}
            <div className='introduce_company mt-2'>
              <p className='text-md'>
                <strong>Project : Trello Clone (1 year ago)</strong>
              </p>
              <p className='text-sm'>
                Hands-on with full project <strong>MERN STACK</strong> ( React , Redux-toolkit (state management) ,
                Async thunk API (to perform asyncronous action )) Nodejs
              </p>
              <p className='text-sm '>GITHUB : https://github.com/LeQuangBao0126/TrelloTicketManagementAPI</p>
              <p className='text-sm text-orange-800 font-bold'>
                <span>-Language : Javascript ,Express.js , Babel to compile JS when dev, build</span> <br />
                <span>-Main features :</span>
                <br />
                <span>
                  -This is the trello clone project , for user to create account . and create board ,columns , cards in
                  column , and then invite another users to join the board. to comments
                </span>
                <br />
                <span>Upload buffer cover images to Cloudinary Provider</span>
                <br />
                <span>Invite user in board to specify card , or remove user to card</span>
                <br />
                <span>Push notify when invite via Web Socket</span>
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className='px-4 py-2  font-mono'>
          <div className='text-xl'>WORK IN TEL4VN - Telecom company (PRODUCT company) (Quit the job in 5/2023) </div>
          <div className='compayny_info border border-gray-300 shadow-sm px-2 py-3 font-mono'>
            <div className='introduce_company text-sm '>
              <span>Working about 1 year</span>
              <p className='text-sm '>
                Collaborate with the dev team as a full-stack backend <strong>(GOLANG)</strong> ,
                <strong>Database</strong> (PostgresSQL , RedisCache) to re-build and develop the new features for main
                product over 10K request/week
              </p>
              <p className='text-sm '>
                <span className='text-sm text-orange-800 font-bold'>Main tasks :</span>
                <br />- Logging sensitive application, and some information users in <strong>ElasticSearch</strong>
                <br />- Full-text search with <strong>ElasticSearch</strong> <br />
                <span>
                  - Batching Writing to <strong>PostgresSQL</strong>
                </span>
                <br />
                <span>Suggest team to use RabbitMQ (to async Message) instead of RedisQueue PubSub</span>
                <br />
                <span>
                  - <strong>Write SQL statment </strong>(JOIN,GROUP,...)
                </span>
                <br />-<strong> Design Database</strong>
                <br />-<strong> Concurrent operations</strong> with go-routine for import data <br />
                - Concurrent send request to another server
                <br />- Product the <strong>APIs</strong>
                <br />
                - Processing the Audio via API of Zalo,Google,VBee providers
                <br />- Working with FINTECH tasks ...and so more
              </p>
              <p className='text-sm'>
                In addition, I also mentor 3 DEVELOPER (Bình , Thông, and Duy) to process the tasks to complete the
                assigned functions and 2 of him are quit the job 😊
              </p>
            </div>
          </div>
        </div>
        <div className='px-4 py-2  font-mono'>
          <div className='text-xl'>WORK IN CMC GLOBAL (Outsource company)</div>
          <div className='compayny_info border border-gray-300 shadow-sm px-2 py-3 font-mono'>
            <div className='introduce_company'>
              <p className='text-sm'>
                <span>Working about 2 years</span> <br />
                <span>
                  In this company I work as a developer mostly with DOTNET and JQUERY Work Daily is reporting, analyzing
                  and implementing new features, and improving the features maintaining projects
                </span>
                <br />
                <span className='font-bold text-orange-700'>PROJECT :PLANNING TOOL ( onsite project)</span>
                <span> Team size : 4 </span>
                <br />
                - This is HRM tool for management the HEADCOUNT Of candidate to join BOSCH. The main tasks is
                maintaining and upgrade the services
                <br />- ASP Dotnet MVC - Application Architecture (Monolithic)
                <br /> - Dotnet framework 4.5 (old version) - Schedule Job
                <br /> - Email reminder monthly
                <br />- RBDMS : SQL SERVER ( store procedure , sql query)
              </p>
              <p className='text-sm'>
                <span className='font-bold text-orange-700'>PROJECT :PLEIGER ERP</span>
                <span> Team size : 8 (4 DEV , 2 TESTER , 1 PM , 1 DESIGN ) </span>
                <br />
                - DEVELOP the application for manufacturing machine for the KOREA customer .The main task is develop the
                new features for customer requirement
                <br />- ASP Dotnet MVC - Application Architecture (Monolithic)
                <br /> - Dotnet framework 4.5 (old version) - Schedule Job
                <br /> - Email reminder monthly
                <br />- RBDMS : SQL SERVER ( store procedure , sql query)
                <br /> No cache , No sensitive log
              </p>
            </div>
          </div>
        </div>
        {/*end  projects info */}

        {/* education */}
        <div className='px-4 py-2  font-mono'>
          <div className='text-xl'>Education</div>
          <div className='compayny_info border border-gray-300 shadow-sm px-2 py-3 font-mono'>
            <div className='introduce_company'>
              UNIVERSITY OF FOOD AND INDUSTRY (Major : Telecom Electric Engineering)
              <br />
              Address : Tân Phú ,HCM city
            </div>
          </div>
        </div>
        {/* end education */}
      </div>
    </div>
  )
}
