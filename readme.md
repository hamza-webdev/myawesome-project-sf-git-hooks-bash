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
    * npm install husky
    * npx husky install

    - creer fichier git-precommit-checks.config.js
    *  touch git-precommit-checks.config.js
    - ensuite tape cette cmd
    * npx husky add .husky/pre-commit 'npx --no-install git-precommit-checks'

    # Message de commit 
    - <type:>[optional scope]: <description>

    - [optional body]

    - Close #us1234

    - [optional footer(s)]

    * Type: fix:, feat:, build:, chore:, ci:, docs:, style:, refactor:, perf:, test:

    # install and configuration commitLint
    * npm install --save-dev @commitlint/cli @commitlint/config-conventional
    - creer un fichier commitlint.config.js
    * npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'
    or
    * npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'

    # Mettre en place citizen message commit
    * npm install --save-dev commitizen @commitlint/cz-commitlint
    * add some lines in pagckage.json file
    ```
    "config": {
        "commitizen": {
            "path": "@commitlint/cz-commitlint""
        }
    }
    ```
    - Asistance de message commit with cz (avant de commiter tapez)
    * > npx cz

    ## Nommage de Branch Git avec les hooks Git, husky et validate-branch-name

    * npm install --save-dev validate-branch-name
    * Creer un fichier nommé validate-branch-namerc.js (into patterne)
    * execute cmd: npx husky add .husky/pre-push 'npx --no-install validate-branch-name'
    * Patterne de file validate-branch-namerc.js =(pattern:  '^(main|staging|production|prod|dev)$|^(feat|fix|bump|rel(?:ease)?)/.+$')
    * creer une branch avec la bonne nommage ()
    - Faire un push de branch blabal vers main ou origin 






 



