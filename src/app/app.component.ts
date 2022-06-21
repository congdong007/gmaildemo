import { Component } from '@angular/core';
import { NbSidebarService , NbMenuItem , NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SoccerManagerSystem';

  /*
  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/home',
      home: true
    },
    {
      title: 'Users',
      icon: 'people-outline',
      link: '/users'
    }
    
  ]; 

  items: NbMenuItem[] = [
    {
      title: 'Profile',
      icon: 'home-outline',
      link: '/home',
      expanded: true,
      children: [
        {
          title: 'Change Password',
          icon: 'eye-outline',
          link: '/changepassword',          
        },
        {
          title: 'Privacy Policy',
          icon: 'email-outline',
          link: '/privacypolicy',          
        },
        {
          title: 'Logout',
          icon: 'music-outline',
          link: '/logout',          
        },
      ],
    },
    {
      title: 'Shopping Bag',
      icon: 'gift-outline',
      link: '/shoppingbag',
      children: [
        {
          title: 'First Product',
          icon: 'eye-outline',
          link: '/firstproduct',
        },
        {
          title: 'Second Product',
          icon: 'email-outline',
          link: '/secondproduct',
        },
        {
          title: 'Third Product',
          icon: 'music-outline',
          link: '/thirdproduct',
        },
      ],
    },
    {
      title: 'Orders',
      icon: 'settings-2-outline',
      link: '/orders',
      children: [
        {
          title: 'First Order',
          icon: 'eye-outline',
          link: '/firstorder',
        },
        {
          title: 'Second Order',
          icon: 'email-outline',
          link: '/secondorder',
        },
        {
          title: 'Third Order',
          icon: 'music-outline',
          link: '/thirdorder',
        },
      ],
    },
  ];  
 */

  items: NbMenuItem[] = [
    {
      title: '收件箱',
      icon: 'email',
      link: '/inbox',
      home: true
    },
    {
      title: '已加星标',
      icon: 'star',
      link: '/starmarked'
    },
    {
      title: '已延后',
      icon: 'clock',
      link: '/delayed'
    },
    {
      title: '重要邮件',
      icon: 'alert-triangle-outline',
      link: '/importedmail'
    },
    {
      title: '聊天',
      icon:  'message-circle',
      link: '/chat'
    },            
    {
      title: '已发邮件',
      icon: 'paper-plane',
      link: '/hassent'
    },            
    {
      title: '草稿',
      icon: 'file',
      link: '/draftmail'
    },            
    {
      title: '所有邮件',
      icon: 'email-outline',
      link: '/allmails'
    },            
    {
      title: '垃圾邮件',
      icon: 'alert-circle-outline',
      link: '/spam'
    },            
    {
      title: '已删除邮件',
      icon: 'trash-2-outline',
      link: '/deletedmails'
    },            
    {
      title: '类别',
      icon: 'rewind-right-outline',
      children: [
        {
          title: 'big data',
          icon: 'rewind-right-outline',
          link: '/bigdatatype',
        },
        {
          title: 'canada',
          icon: 'rewind-right-outline',
          link: '/canadatype',
        },
        {
          title: 'facebook',
          icon: 'rewind-right-outline',
          link: '/facebooktype',
        },      
      ],      
    },            
    {
      title: '隐藏部分标签',
      icon: 'star',
      children: [
        {
          title: '定时发送',
          icon: 'clock-outline',
          link: '/timingsend',
        },
        {
          title: '管理标签',
          icon: 'settings-outline',
          link: '/managebookmark',
        },
        {
          title: '创建新标签',
          icon: 'plus-outline',
          link: '/createbookmark',
        },      
      ],       
    },            
    {
      title: '发起新会议',
      icon: 'video-outline',
      link: '/startmeeting'
    },            
    {
      title: '加入会议',
      icon: 'phone-call-outline',
      link: '/joinmeeting'
    },            
  ];   
  constructor(private readonly sidebarService: NbSidebarService,
              private readonly themeService: NbThemeService) {
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }  

  changeTheme() {
    this.themeService.changeTheme('dark');
  }  

  getMoreInformation(): string {
    return 'monkeycd monkeycd monkeycd@gmail.com';
  }
}
