interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Subscriber'],
  customerRoles: [],
  tenantRoles: ['Subscriber'],
  tenantName: 'Company',
  applicationName: 'City Analysis',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Read company information',
    'Read city information',
    'Read person information',
    'Read crime organisation information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/6d2e8cde-59f0-4036-89f1-08350c72f8b7',
};
