* sudo mysql -v
* mysql
* CREATE USER 'test'@'127.0.0.1' IDENTIFIED BY 'test';
* GRANT ALL PRIVILEGES ON *.* TO 'test'@'127.0.0.1';
* sudo symfony console d:m:m --no-interaction
- Dump mysql creer les table with entity files
* symfony console doctrine:schema:update --dump-sql

- start service mysql ubuntu
* sudo systemctl start mysql

- open Vs code as sudo admin
* sudo code --user-data-dir="~/.vscode-root"



    Run vscode as superuser:
    $ sudo code --user-data-dir=~/root
    This will open vscode without your previous settings (fresh) with superuser privileges and you can install your extensions.

OR

    Follow these steps :

    sudo chown -R <user> <path_to_your_vscode_installation_directory>
    Hit follwing in terminal
    to check the current user on your machine :
    whoami
    for e.g. john
    You can find path of vscode directory using following command :
    whereis code
    e.g. in my case path is : /usr/share/code
    Now run :
    sudo chown -R john /usr/share/code
    This will run vscode with admin privilege
    Now install your extensions
    After reset owner back to root
    sudo chown -R root /usr/share/code

    # changement de de bash en zsh in linux
    * sudo apt install zsh
    * echo $0 
    -  change to zsh
    * sudo chsh -> /bin/zsh->

    ## GIT Hooks pre-commit ..

    * npm install --save-dev git-precommit-checks


