class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :number
      t.string :email
      t.integer :category_id

      t.timestamps
    end
  end
end
