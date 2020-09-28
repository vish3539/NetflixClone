#why is this for ?  
For some users, While using npx create-react-app to install the modules, it installs however when you do npm start, it errors out and fails to launch the development server.To fix this you have to downgrade the react script to 2.1.8 . This is absolutely fine, however if your projects by chance require the latest version of the react script, then its a big headache to fix it at that stage.

By using this template,i try to solve that issue. now you can always rest assure that all the modules used in the template will be up-to-date and the most important thing is, it WORKS.!!

#How to use
1. git clone https://reacttemp your-app-name
2. cd your-app-name
3. npm install
4. npm update --save
5. git remote remove origin. note: 6&7 can be ignored if you dont wnat to push right now.
6. git remote add origin https://github.com/yourdir
7. git push
8. npm start
