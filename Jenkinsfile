pipeline {
   agent any
            stages {
                   stage('build'){
                           steps{ 
                    nodejs('Hackathon') {           
                         sh 'npm install --legacy-peer-deps'
                         sh 'npm run build'
                    }
                   }
                 }
                 
                                  
               stage('deployment'){
                    steps{
                       sh 'tar -czvf dist.tar.gz dist'
                       sh 'scp dist.tar.gz jenkins@18.235.170.249:/var/www/html/incredibles-fe'
                       sh 'ssh jenkins@18.235.170.249 "cd /var/www/html/incredibles-fe/ && tar -xvzf dist.tar.gz --strip 1"'
                       }
                     }
                 }
         post{
           always {
                  cleanWs()
              }
     }
}
