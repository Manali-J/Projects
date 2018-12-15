export class Dashboard{
    seal_id: number;
    application:string;
    env1:string;
    env2:string;
    description:string;
}

export const dash_data:Dashboard[] = [
    {seal_id:12345, application:"app1", env1:"uat1",env2:"sit1", description:""},
    {seal_id:234, application:"app2",env1:'sit',env2:'preprod', description:''},
    {seal_id:456,application:'red',env1:'uat',env2:'preprod', description:'ticket 456'}
];