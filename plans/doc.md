# Elements
* Different times of deletion are open to be discussed (Ex. 24 hours, 1 hour (with each like extending by 1 hour more))
* Post images with a built-in time of deletion (default end of day)
* Users can 'like' pictures to extend their time on the site
* Users can report pictures inapropriate for the site
* Users will need an invite code to join (First users get 32, their invites give 16 and so on)

# Screens
Main splash https://wireframe.cc/1UNHMf
Log in - https://wireframe.cc/qCKVT5
Main View - https://wireframe.cc/Ec7gfV
  Sort - New
  Sort - Top
Profile (Settings) - https://wireframe.cc/ulAu30
About - https://wireframe.cc/iUjiKAhttps://wireframe.cc/ulAu30

# Colors

# Database 
<table>Profile</table>
<table>Content</table>

How to flag when user has already liked a picture
Profile
  ID
  email
  username *unique*

Content
  ID
  PosterID
  content
  text *not required*
  post time
  number of votes
  Time of Deletion
  No. of Reports (Queried by the hour)