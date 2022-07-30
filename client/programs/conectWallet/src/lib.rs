use anchor_lang::prelude::*;
use anchor_lang::solana_program::entrypoint::ProgramResult;
use solana_program::spl_token::spl_associated_token_account;
declare_id!("9EhVATLEC3hiY7hkQiGmmNzhvciVHpmHr21fGQxdqii5");

#[program]
pub mod conect_wallet {
    use super::*;

    pub fn create(ctx: Context<Create>) -> ProgramResult {
        let base_account = &mut ctx.accounts.base_account;
        base_account.count = 0;
        Ok(())
    }

    pub fn increment(ctx: Context<Increment>) -> ProgramResult {
        let base_account = &mut ctx.accounts.base_account;
        base_account.count += 1;
        Ok(())
    }

    pub fn create_token_account(ctx: Context<CreateAccountToken>) -> ProgramResult {
        let base_account = &mut ctx.accounts.base_account;
        instruction::create_associated_token_account;
        Ok(())
    }
    
}

#[derive(Accounts)]
pub struct Initialize {}
#[derive(Accounts)]
pub struct Create<'info> {
    #[account(init, payer = user, space = 16 + 16)]
    pub base_account: Account<'info, BaseAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program <'info, System>,
}
#[derive(Accounts)]
pub struct  CreateAccountToken<'info>{
#[account(init, payer = user, space = 16 + 16)]
pub base_account: Account<'info, BaseAccount>,
#[account(mut)]
pub user: Signer<'info>,
pub system_program: Program <'info, System>,
}

// Transaction instructions
#[derive(Accounts)]
pub struct Increment<'info> {
    #[account(mut)]
    pub base_account: Account<'info, BaseAccount>,
}

// An account that goes inside a transaction instruction
#[account]
pub struct BaseAccount {
    pub count: u64,
}
