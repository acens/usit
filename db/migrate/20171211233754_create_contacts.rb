class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :history
      t.string :language
      t.integer :knowledge_id

      t.timestamps
    end
  end
end
