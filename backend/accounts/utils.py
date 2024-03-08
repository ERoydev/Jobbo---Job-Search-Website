

def detectUser(user):
  if user.role == 1:
    redirectUrl = 'MyAccount'
    return redirectUrl

  elif user.role == 2:
    redirectUrl = 'CompanyDashboard'
    return redirectUrl