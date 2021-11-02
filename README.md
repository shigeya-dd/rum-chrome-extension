# Datadog Chrome extension 

## What is this?
- It is a chrome extension for user can have a quick view on Datadog RUM with simple implementation.
- Please check the [document](https://docs.datadoghq.com/real_user_monitoring/) for Datadog RUM.

## Prerequisite
-  Datadog Account

## How to setup
- Add it to your chrome from chrome store.
  ![chrome_store](https://p-qkfgo2.t2.n0.cdn.getcloudapp.com/items/ApuELzPp/e71a2f61-8018-4b4c-9d80-2405d265ba1b.jpg?v=635efaa6a1d04ec3cf9cb9b917452dd0)

- Pin it on extension bar  
  ![pin](https://p-qkfgo2.t2.n0.cdn.getcloudapp.com/items/12uvmjJQ/2751a271-24b0-4636-a3f2-3c0d2ac91b86.jpg?v=5afd8b46c5b1eceafc64f145c94ce6cc)
  - Right click the icon and click `option` to open the option windows 
  ![options](https://p-qkfgo2.t2.n0.cdn.getcloudapp.com/items/JruxYZoj/a03c09d3-24ce-4326-88e0-d46560ec5c38.jpg?v=aed64f22c7e534e933a096e5734b0f8a) 
  ![options page](https://p-qkfgo2.t2.n0.cdn.getcloudapp.com/items/GGu4rWgJ/9b2810bd-96bc-49a3-be6a-3178e006ef6c.jpg?v=741a2cfed808372804cc7973f34ed218)
  - Input the match regex to filter the website which you would like to track.  
    eg: https://www.wikipedia.org  
    reg : https://[a-zA-Z]+\.wikipedia\.org/[^\s]*

- Access the website (eg: www.wikipedia.org)
- Check output in datadog rum