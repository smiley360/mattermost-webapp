# Mattermost

SML Instructions:

--------------------

Building your changes to a deployable zip
- Use npm version 10 or greater (nvm install 10)
- cd mattermost-server
- make build
- make build-client
- make package

Deploy to Staging Server
- Copy to server ("scp dist/mattermost-team-linux-amd64.tar.gz mattermost-staging:")
- SSH into the mattermost-staging server
- Remove contents of our old temp directory we used to deploy ("rm -rf tmp/*")
- Move the file into the temp directory ("mv mattermost-team-linux-amd64.tar.gz tmp/")
- Change directory to the tmp directory ("cd tmp/")
- Unzip the file ("gunzip mattermost-team-linux-amd64.tar.gz")
- Untar the file ("tar -xvf mattermost-team-linux-amd64.tar")
- You should now have a mattermost directory within your $HOME/tmp/ directory
- Copy items we need from the old mattermost deploy ("sudo cp -rfp /opt/mattermost/data mattermost/")
- Copy the plugins we need from the old mattermost deploy ("sudo cp -rfp /opt/mattermost/plugins mattermost$
- Copy the config.json from the old deploy ("sudo cp -rfp /opt/mattermost/config/config.json mattermost/con$
- Remove the old backup ("rm -rf /opt/mattermost.bak")
- Stop the running mattermost service ("sudo systemctl stop mattermost")
- Backup the existing mattermost deploy ("sudo mv /opt/mattermost /opt/mattermost.bak")
- Deploy the new mattermost ("sudo mv $HOME/tmp/mattermost /opt/mattermost")
- Startup mattermost again ("sudo systemctrl start mattermost")

Deploy to Production Server
- (Same steps as above, but with the production server)

--------------------

Mattermost is an open source, self-hosted Slack-alternative from [https://mattermost.org](https://mattermost.org).

It's written in Golang and React and runs as a single Linux binary with MySQL or Postgres. Every month on the 16th [a new compiled version is released under an MIT license](https://www.mattermost.org/download/).

This project hosts the webapp client code. Please file issues at [/mattermost-server](https://github.com/mattermost/mattermost-server), which hosts the server code.

- [Review product documentation](http://docs.mattermost.com/).
- [Review developer documentation](https://developers.mattermost.com/).
- [Download compiled version](https://mattermost.org/download).

Try out Mattermost: 

- [Join the Mattermost Contributor's server](https://pre-release.mattermost.com/) (latest nightly builds, unstable)
- [Join the Mattermost Demo server](https://demo.mattermost.com) (latest stable version)

Deploy on Heroku 

[![Deploy a Preview](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/mattermost/mattermost-heroku)

_Note: Heroku preview does not include email or persistent storage_

Install on your own machine: 

- [One-line Docker Preview](http://docs.mattermost.com/install/docker-local-machine.html#one-line-docker-install) 
- [Developer Machine Setup](https://docs.mattermost.com/developer/dev-setup.html)
- [Production Install Guides using Linux Binary](http://www.mattermost.org/installation/)
- [Production Docker Install](https://docs.mattermost.com/install/prod-docker.html) 

Get Involved:

- [Contribute Code](http://docs.mattermost.com/developer/contribution-guide.html)
- [Find "Help Wanted" projects](https://mattermost.atlassian.net/issues/?filter=10101)
- [Join Developer Discussion on a Mattermost Server for contributors](https://pre-release.mattermost.com/signup_user_complete/?id=f1924a8db44ff3bb41c96424cdc20676)
- [File Bugs](http://www.mattermost.org/filing-issues/)
- [Share Feature Ideas](http://www.mattermost.org/feature-requests/)
- [Get Troubleshooting Help](https://forum.mattermost.org/t/how-to-use-the-troubleshooting-forum/150)

Learn More:

- [API Options - webhooks, slash commands, drivers and web service](http://docs.mattermost.com/developer/api.html)
- [Localization Guide](http://docs.mattermost.com/developer/localization.html#translation-process)

Get the Latest News:

- **Twitter** - Follow [Mattermost](https://twitter.com/Mattermost)
- **Email** - Subscribe to our [newsletter](http://mattermost.us11.list-manage.com/subscribe?u=6cdba22349ae374e188e7ab8e&id=2add1c8034) (1 or 2 per month)
- **IRC** - Join the #matterbridge channel on [Freenode](https://freenode.net/) (thanks to [matterircd](https://github.com/42wim/matterircd))

Any other questions, mail us at info@mattermost.com. We'd love to meet you!
