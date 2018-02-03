# phone-picker-express
PhonePicker web application

## Node.js environment setup
1. Download node-v8.9.4 for your OS distribution [here](https://nodejs.org/en/download/)
2. Extract into /opt directory (or wherever you want)
    ```
    tar xvf ~/Downloads/node-v8.9.4-linux-x64.tar.xz
    sudo mv ~/Downloads/node-v8.9.4-linux-x64/ /opt/
    ```
3. Create symlinks to the node binaries in /usr/local/bin directory; on Windows add binaries listed below to the PATH
    ```
    sudo ln -s /opt/node-v8.9.4-linux-x64/bin/node /usr/local/bin/node
    sudo ln -s /opt/node-v8.9.4-linux-x64/bin/npm /usr/local/bin/npm
    sudo ln -s /opt/node-v8.9.4-linux-x64/bin/npx /usr/local/bin/npx
    ```
4. Install nodemon.
    >Nodemon is a utility that will monitor for any changes in your source and automatically restart your server

    `npm install nodemon -g`

## Run code
1. Clone repository

    `git clone https://github.com/OlegPoyan/phone-picker-express.git`

    or use SSH (requires you to link your SSH public key with github account)

    `git clone git@github.com:OlegPoyan/phone-picker-express.git`
2. `cd phone-picker-express`
3. Install all project dependecies listed in the package.json file

    `npm install`

4. Run HTTP server on port 3000

    `npm run dev`
