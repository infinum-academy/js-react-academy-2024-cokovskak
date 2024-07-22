import { act, fireEvent, render,screen, waitFor } from "@testing-library/react";
import { LoginForm } from "./LoginForm";
import { mutator } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";

jest.mock('@/fetchers/mutators',()=>{
    return{
        mutator: jest.fn().mockResolvedValue(null),
    };
})

describe('LoginForm',()=>{
    it('should call the login fetcher with provided arguments',async()=>{

        render(<LoginForm/>)
        fireEvent.change(screen.getByTestId('email'),{target :{value:'random@gmail.com'}});
        fireEvent.change(screen.getByTestId('password'),{target:{value:'Lozinka123!'}});
        const loginButton=screen.getByTestId('loginButton');
        act(()=>{
            loginButton.click();
        })
        await waitFor(()=>{
            expect(mutator).toHaveBeenCalledWith(swrKeys.login,{arg: { email: 'random@gmail.com', password: 'Lozinka123!' },
            });
        })

    })
})