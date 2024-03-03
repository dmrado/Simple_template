// const formData = new FormData()
// formData.append('id', post.id);

// const deletePost = async (id: number) => {
//     "use server"
//     // const {id} = Object.fromEntries(formData)
//     console.log('formData', formData)
//
//     // const id = formData.get('id')
//     await Post.destroy({
//         where: {id}
//     })
//     revalidatePath('/posts')
// }
//
// type PostPageParams = { params: { id: number } }
// const PostPage = async ({ params }: PostPageParams) => {
//     const session = await getServerSession()
//
//     // try {
//     const post: Post | null = await Post.findByPk(params.id)
//     // if (!post) {
//     // revalidatePath('/404')
//     // }
//     // } catch (error) {
//     //     console.log(error)
//     // }
//
//     if (post === null) {
//         // await handler(req, res);
//
//         // todo: return 404 status
//         return <Custom404/>
//     }
//
//     async function removePost(id: number) {
//         'use server'
//         await Post.destroy({where: {id}})
//         revalidatePath('/posts')
//         redirect('/posts')
//     }
// }


// const posts = await Post.findAll({ order: [ [ 'updatedAt', 'DESC' ] ] })
//response мапим что бы получить объект секвелайз, а не огромной модели данных
// .then(res => res.map(r => r.dataValues))

import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { DefaultSession } from 'next-auth'


//+++++++++++++++++++++++++++++КОНФИГУРАЦИЯ ДЛЯ NextAuth+++++++++++++++++++++++++++++
// export const authConfig = {
//     secret: process.env.NEXTAUTH_SECRET,
//     callbacks: {
//         async signIn({ account, profile }) {
//             if (account && account.provider === 'google') {
//                 console.warn('account', account)
//                 console.warn('profile', profile)
//                 return true
//             }
//             return true // Do different verification for other providers that don't have `email_verified`
//         },
//         async session({ session, token, user }) {
//             console.warn('session', session)
//             console.warn('token', token)
//             console.warn('user', user)
//             return new Promise<DefaultSession>(resolve => {
                // resolve({
                //   user: { name: 'XX', email: 'xx@yy.ru', image: null },
                //   expires: '' })
//                 resolve(session)
//             })
//         }
//     },
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID!,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     authorization: {
//     params: {
//         prompt: 'consent',
//             access_type: 'offline',
//             response_type: 'code'
//     }
// }
// }),
// Credentials({
// credentials: {
//    email: { label: 'email', type: 'email', required: true },
//    password: { label: 'password', type: 'password', required: true }
// },
// async authorize(credentials) {
//    if(!credentials?.email || !credentials.password) return null
//    const currentUser: User = users.find(user => user.email === credentials.email): User
//    if(currentUser && currentUser.password === credentials.password) {
//       const{ password, ...userWithoutPassword } = currentUser
//       return userWithoutPassword as User
//    }
//    return null
// }
// })
// ],
//пример приватного роута
// pages: {
//    signIn: '/signin'
// }
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++