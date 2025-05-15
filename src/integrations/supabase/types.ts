export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      contacts_stemcon: {
        Row: {
          created_at: string | null
          email: string | null
          id: string
          message: string | null
          name: string | null
          phone: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: string
          message?: string | null
          name?: string | null
          phone?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          message?: string | null
          name?: string | null
          phone?: string | null
        }
        Relationships: []
      }
      tblborrowers: {
        Row: {
          annual_salary: number | null
          application_id: string | null
          application_type: string | null
          applying_with: string | null
          bank_loan_amount: number | null
          bank_name: string | null
          borrower_id: string | null
          contribution: number | null
          created_at: string
          current_address: string | null
          current_living: string | null
          education: string | null
          email: string | null
          employment_duration: string | null
          employment_status: string | null
          id: number
          identification_documents: string[] | null
          loan_term: number | null
          mobile: string | null
          monthly_income: number | null
          name: string | null
          occupation: string | null
          partner_annual_salary: number | null
          partner_education: string | null
          partner_employment_status: string | null
          partner_monthly_income: number | null
          partner_name: string | null
          partner_occupation: string | null
          preferred_suburb: string | null
          property_address: string | null
          property_value: number | null
          relationship: string | null
          required_equity_start_loan: number | null
          sale_type: string | null
          secondary_documents: string[] | null
          status: string | null
          submitted_at: string | null
          total_expenses: number | null
          user_id: string | null
        }
        Insert: {
          annual_salary?: number | null
          application_id?: string | null
          application_type?: string | null
          applying_with?: string | null
          bank_loan_amount?: number | null
          bank_name?: string | null
          borrower_id?: string | null
          contribution?: number | null
          created_at?: string
          current_address?: string | null
          current_living?: string | null
          education?: string | null
          email?: string | null
          employment_duration?: string | null
          employment_status?: string | null
          id?: number
          identification_documents?: string[] | null
          loan_term?: number | null
          mobile?: string | null
          monthly_income?: number | null
          name?: string | null
          occupation?: string | null
          partner_annual_salary?: number | null
          partner_education?: string | null
          partner_employment_status?: string | null
          partner_monthly_income?: number | null
          partner_name?: string | null
          partner_occupation?: string | null
          preferred_suburb?: string | null
          property_address?: string | null
          property_value?: number | null
          relationship?: string | null
          required_equity_start_loan?: number | null
          sale_type?: string | null
          secondary_documents?: string[] | null
          status?: string | null
          submitted_at?: string | null
          total_expenses?: number | null
          user_id?: string | null
        }
        Update: {
          annual_salary?: number | null
          application_id?: string | null
          application_type?: string | null
          applying_with?: string | null
          bank_loan_amount?: number | null
          bank_name?: string | null
          borrower_id?: string | null
          contribution?: number | null
          created_at?: string
          current_address?: string | null
          current_living?: string | null
          education?: string | null
          email?: string | null
          employment_duration?: string | null
          employment_status?: string | null
          id?: number
          identification_documents?: string[] | null
          loan_term?: number | null
          mobile?: string | null
          monthly_income?: number | null
          name?: string | null
          occupation?: string | null
          partner_annual_salary?: number | null
          partner_education?: string | null
          partner_employment_status?: string | null
          partner_monthly_income?: number | null
          partner_name?: string | null
          partner_occupation?: string | null
          preferred_suburb?: string | null
          property_address?: string | null
          property_value?: number | null
          relationship?: string | null
          required_equity_start_loan?: number | null
          sale_type?: string | null
          secondary_documents?: string[] | null
          status?: string | null
          submitted_at?: string | null
          total_expenses?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      tblcontracts: {
        Row: {
          borrower_first_name: string | null
          borrower_last_name: string | null
          capital_required_date: string | null
          created_at: string
          financial_close_date: string | null
          id: number
          investment_amount: number | null
          investor_id: string | null
          investor_net_coupon_percentage: number | null
          loan_amount: number | null
          repayment_date: string | null
          security_address: string | null
          security_description: string | null
          settlement_date: string | null
          sub_fund_number: string | null
          total_price_percentage: number | null
          user_id: string | null
        }
        Insert: {
          borrower_first_name?: string | null
          borrower_last_name?: string | null
          capital_required_date?: string | null
          created_at?: string
          financial_close_date?: string | null
          id?: number
          investment_amount?: number | null
          investor_id?: string | null
          investor_net_coupon_percentage?: number | null
          loan_amount?: number | null
          repayment_date?: string | null
          security_address?: string | null
          security_description?: string | null
          settlement_date?: string | null
          sub_fund_number?: string | null
          total_price_percentage?: number | null
          user_id?: string | null
        }
        Update: {
          borrower_first_name?: string | null
          borrower_last_name?: string | null
          capital_required_date?: string | null
          created_at?: string
          financial_close_date?: string | null
          id?: number
          investment_amount?: number | null
          investor_id?: string | null
          investor_net_coupon_percentage?: number | null
          loan_amount?: number | null
          repayment_date?: string | null
          security_address?: string | null
          security_description?: string | null
          settlement_date?: string | null
          sub_fund_number?: string | null
          total_price_percentage?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      tblinvestors: {
        Row: {
          created_at: string
          id: number
          Name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          Name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          Name?: string | null
        }
        Relationships: []
      }
      tblpayments: {
        Row: {
          amount: string | null
          confirmations: number | null
          created_at: string
          id: number
          payment_date: string | null
          property: string | null
          status: string | null
          type: string | null
        }
        Insert: {
          amount?: string | null
          confirmations?: number | null
          created_at?: string
          id?: number
          payment_date?: string | null
          property?: string | null
          status?: string | null
          type?: string | null
        }
        Update: {
          amount?: string | null
          confirmations?: number | null
          created_at?: string
          id?: number
          payment_date?: string | null
          property?: string | null
          status?: string | null
          type?: string | null
        }
        Relationships: []
      }
      tbltransfers: {
        Row: {
          created_at: string
          from_owner: string | null
          id: number
          property: string | null
          status: string | null
          to_owner: string | null
          transfer_date: string | null
          value: string | null
        }
        Insert: {
          created_at?: string
          from_owner?: string | null
          id?: number
          property?: string | null
          status?: string | null
          to_owner?: string | null
          transfer_date?: string | null
          value?: string | null
        }
        Update: {
          created_at?: string
          from_owner?: string | null
          id?: number
          property?: string | null
          status?: string | null
          to_owner?: string | null
          transfer_date?: string | null
          value?: string | null
        }
        Relationships: []
      }
      tblusers: {
        Row: {
          created_at: string
          id: number
          last_login: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          last_login?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          last_login?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
