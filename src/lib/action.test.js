import reducer from './categories.js'
// import { categoryCreate, categoryDestroy, categoryUpdate } from '../../../src/action/actions.js'


it('shoudl', ()=>{

    expect(true).toBe(true)
})

describe('testing the reducer', ()=> {
    it('Test: return orignal state on passing in an incorrect/invalid action', () => {
        const red = reducer([], 'wrong')
        expect(red).toEqual([])
    })

    it('Test: CATEGORY_CREATE', () => {
        let action = {
            type: 'CATEGORY_CREATE',
            payload: {
                id : 1,
                content : 'hello'
            }
        }
        let state = [{
            id : 1,
            content : 'hello'
        }]

        const red = reducer([], action)
        expect(red).toEqual(state)
    })

    it('Test: CATEGORY_UPDATE', () => {
        let action = {
            type: 'CATEGORY_UPDATE',
            payload: {
                id : 1,
                content : 'bye'
            }
        }

        let oldState = [{
            id : 1,
            content : 'hello'
        }]

        let newState = [{
            id : 1,
            content : 'bye'
        },
        ]
        const red = reducer(oldState, action)
        expect(red).toEqual(newState)
    })

    it('Test: CATEGORY_DESTROY', () => {
        
        let action = {
            type: 'CATEGORY_DESTROY',
            payload: 1
        }
        let state = [{
            id : 1,
            content : 'hello'
        }]
        const red = reducer(state, action)
        expect(red).toEqual([])
    })
})